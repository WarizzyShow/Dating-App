import mongoose from "mongoose";
const cardSchema = mongoose.Schema({
    name : String,
    imgURL : String
})

export default mongoose.model('Card', cardSchema)