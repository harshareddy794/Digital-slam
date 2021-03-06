import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
    },
    password : String,
});

const ownerModel = mongoose.model("owner",schema);

export default{
    ownerModel,
}