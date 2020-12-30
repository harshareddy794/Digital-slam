import service from "../service/owner.js";

const createOwnerGET = (req,res) => {
    res.render("signup");
};


const createOwnerPOST = async(req,res) => {
    try {
        const result = await service.createOwner(req)
        if(result){
            res.redirect("/owner/confirm-email")
        }else{
            throw new Error("Signup failed")
        }
    } catch (error) {
        throw new Error(error);
    }
};


const confirmPassword = (req,res) =>{
    res.send("Password sent")
};



const loginOwner = () => {

};


export default{
    createOwnerGET,
    createOwnerPOST,
    loginOwner,
    confirmPassword,
}