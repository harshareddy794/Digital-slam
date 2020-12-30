import ownerModel from "../models/owner.js";
import bcrypt from "bcryptjs";
import util from "../helper/utils.js";

const createOwner = async({body}) => {
    try {
        body.password = await bcrypt.hash(body.password,10);
        const owner = new ownerModel.ownerModel({...body})
        const result = await owner.save();
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

export default {
    createOwner,
}