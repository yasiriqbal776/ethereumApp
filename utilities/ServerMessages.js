
// Define our schema

var ServerMessages = function Constructor() {
   
};

ServerMessages.prototype.returnSuccess=function() {
  return 200;
} 

ServerMessages.prototype.returnSuccess=function() {
  return 200;
} 

ServerMessages.prototype.returnPasswordMissMatch=function() {
  return 401;
}

ServerMessages.prototype.returnNotFound=function() {
  return 400;
}

ServerMessages.prototype.returnUserAlreadyExists=function() {
  return 500;
}    

ServerMessages.prototype.returnFailure=function() {
  return 300;
}

// Export the Mongoose model
module.exports = ServerMessages;