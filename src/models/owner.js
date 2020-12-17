import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
});

const ownerModel = mongoose.model("owner",schema);

export default{
    ownerModel,
}