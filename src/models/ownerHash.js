import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
    },
    hash : String,
});

const ownerHashModel = mongoose.model("ownerhash",schema);

export default{
    ownerHashModel
}