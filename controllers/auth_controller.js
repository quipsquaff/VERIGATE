// Import the model (/models/auth.js) to use our database functions.

exports.index = function(req, res) {
    // auth.userPass(function (data) {
    //     var hbsObject = {
    //         userInfo: data
    //     };
    //     console.log(hbsObject);
    //     res.render('register', hbsObject);
    //     console.log(data);
    // });
    res.json('/');
};