import ownerModel from "../models/owner.js";
import ownerHashModel from "../models/ownerHash.js";
import bcrypt from "bcryptjs";
import util from "../helper/utils.js";

const createOwner = async({body}) => {
    try {
        const owner = new ownerModel.ownerModel({...body});
        const result = await owner.save();
        if(result){
            var data = {};
            data.hash = util.generateUniqueId();
            data.userId = result.id;
            const ownerHash = new ownerHashModel.ownerHashModel({...data});
            const hashresult = await ownerHash.save();
            if(!hashresult){
                throw new Error("Failed to signup user");
            }

        }else{
            throw new Error("Failed to signup user");
        }
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

export default {
    createOwner,
}