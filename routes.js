module.exports = function(app){

    const application = require('./routes/application');
    const register = require('./routes/register');
    const devices = require('./routes/devices');
    const auth = require('./routes/auth');

    // Points us towards our middleware logic to determine proper routing.
    app.use('/', register) ; // Route for newUsers data.
    app.use('/application', application) ; // Registration page
    app.use('/devices', devices); // add-remove devices page
    app.use('/auth', auth)
}