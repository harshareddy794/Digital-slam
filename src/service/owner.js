import ownerModel from "../models/owner.js";
import ownerHashModel from "../models/ownerHash.js";
import bcrypt from "bcryptjs";
import util from "../helper/utils.js";

// Email function
const emailOptions = async (req, email, id, hash) => {
    let options = {};
    options.email = email;
    options.subject = "SET PASSWORD!!!";
    options.body = req.headers.host + "/api/v1/clients/set-password/?u=" + id +"&q="+hash;
    await util.sendMail(options);
};

const createOwner = async(req) => {
    try {
        const body = req.body;
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
            }else{
                await emailOptions(req,result.email,hashresult.userId,hashresult.hash);
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