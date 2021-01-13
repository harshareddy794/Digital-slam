import service from "../service/owner.js";

const createOwnerGET = (req,res) => {
    res.render("signup");
};


const createOwnerPOST = async(req,res) => {
    try {
        const result = await service.createOwner(req);
        if(result){
            res.redirect("/owner/confirm-email")
        }else{
            throw new Error("Signup failed")
        }
    } catch (error) {
        throw new Error(error);
    }
};


const confirmEmail = (req,res) =>{
    res.render("email-confirmation")
};



const loginOwner = () => {

};


export default{
    createOwnerGET,
    createOwnerPOST,
    loginOwner,
    confirmEmail,
}