const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const fileSchema = new Schema({
    filename: { type: String, required: true},
    path: { type: String, required: true},
    size: { type: Number, required: true},
    uuid:{ type: String, required: true},
    reciever:{ type: String, required: false},
    sender:{ type: String, required: false},
}, {timestamps: true});


module.exports = mongoose.model('File', fileSchema);