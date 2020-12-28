import service from "../service/owner.js";

const createOwnerGET = async(req,res) => {
    res.render("signup");
};


const createOwnerPOST = async(req,res) => {
    const result = await service.createOwner(req);
    res.send(result);
};

const loginOwner = () => {

}


export default{
    createOwnerGET,
    createOwnerPOST,
    loginOwner,
}