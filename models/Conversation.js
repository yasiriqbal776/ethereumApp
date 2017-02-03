var mongoose = require('mongoose');
var EthereumUser = require('./EthereumUser');


// Define our beer schema
var ConversationSchema   = new mongoose.Schema({
    _user1Id : { type: mongoose.Schema.Types.ObjectId, ref: 'EthereumUser' },
    username1:String,
    _user2Id : { type: mongoose.Schema.Types.ObjectId, ref: 'EthereumUser' },
    username2:String,
    createdOnUTC: Date,
    updatedOnUTC: Date,
    isDeleted: Boolean
});

// Export the Mongoose model
module.exports = mongoose.model('Conversation', ConversationSchema);