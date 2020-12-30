import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        required : true,
    },
    hash : String,
});

const ownerModel = mongoose.model("owner",schema);

export default{
    ownerModel,
}