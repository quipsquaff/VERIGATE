#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WiFiMulti.h> 
#include <ESP8266mDNS.h>
#include <ESP8266WebServer.h>
#include <PubSubClient.h>



//ESP8266WiFiMulti wifiMulti;     // Create an instance of the ESP8266WiFiMulti class, called 'wifiMulti'

//ESP8266WebServer server(80);    // Create a webserver object that listens for HTTP request on port 80

WiFiClient espClient;
PubSubClient client(espClient);

const char* ssid = "ssid"; // enter WIFI ssid here
const char* password = "password"; // enter WIFI password here
const char* mqtt_server = "192.168.x.x"; // MQTT SERVER ADDRESS
const int led = 2;
long lastMsg = 0;
char msg[50];
int value = 0;





void setup(void){
  Serial.begin(115200);         // Start the Serial communication to send messages to the computer
  Serial.println("STARTING COMM");
  pinMode(2, OUTPUT);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to: ");
  Serial.print(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WIFI CONNECTED");
  Serial.println("ip address: ");
  Serial.println(WiFi.localIP());
  
  
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
 
  // Switch on the LED if an 1 was received as first character
  if ((char)payload[0] == '0') {
     Serial.println("LOW");
    digitalWrite(2, LOW);   // Turn the LED on (Note that LOW is the voltage level
    // but actually the LED is on; this is because
    // it is acive low on the ESP-01)
  } 
 
 if ((char)payload[0] == '1') {
    Serial.println("HIGH");
    digitalWrite(2, HIGH);  // Turn the LED off by making the voltage HIGH
  }
 
}

void reconnect() {
  while(!client.connected()){
    Serial.print("Attempting MQTT connection...");
    if(client.connect("ESP8266Client")){
      Serial.println("MQTT CONNECTED");
      // publish to topic "event"
      client.publish("event", "STATUS OK: ");
      // 
      client.subscribe("event");
    } else {
      Serial.print("failed, client state: ");
      Serial.print(client.state());
      Serial.println("reconnecting in 5 seconds");
      delay(5000);
      }
  }

}

void loop(void){
  if(!client.connected()){
    reconnect();
  
  }
  client.loop();

  long now = millis();
  if(now - lastMsg > 2000) {
    lastMsg = now;
    ++value;
    snprintf (msg, 75, "STATUS OK: #%ld", value);
    Serial.print("Publish message: ");
    Serial.println(msg);
    client.publish("event", msg);
  }

  
}