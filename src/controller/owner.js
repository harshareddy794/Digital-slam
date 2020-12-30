import service from "../service/owner.js";

const createOwnerGET = async(req,res) => {
    res.render("signup");
};


const createOwnerPOST = async(req,res) => {
    try {
        const result = await service.createOwner(req)
        if(result){
            res.send("Signup success")
        }else{
            throw new Error("Signup failed")
        }
    } catch (error) {
        throw new Error(error);
    }
};

const loginOwner = () => {

};


export default{
    createOwnerGET,
    createOwnerPOST,
    loginOwner,
}