// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // Data about the user when they log in is stored in req
  // user req.user to get the user id, similar to params.id
  if (req.user) {
    console.log("middleware working- TRUE")
    return next();
  }
  
  req.flash('unAuthenticated', 'Sorry, you must be logged in to see that');
  console.log("middleware working- FLASE")
  // If the user isnt' logged in, redirect them to the login page
  // i think this redirect is fine- it's saying if user is not authtenticated then redirect to / ,which in our case is login. 
  return res.redirect("/"); 
};