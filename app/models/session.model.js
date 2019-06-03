const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    login: { type: String, required: true }
});

module.exports = mongoose.model('sessions', SessionSchema);