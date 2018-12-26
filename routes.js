module.exports = function(app){

    const application = require('./routes/application');
    const register = require('./routes/register');
    const devices = require('./routes/devices')

    // Points us towards our middleware logic to determine proper routing.
    app.use('/', register) ; // Root directory
    app.use('/application', application) ; // Registration page
    app.use('/devices', devices);

}