const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bauerSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});
  
const Bauer = mongoose.model("Bauer", bauerSchema);
  
module.exports = Bauer;