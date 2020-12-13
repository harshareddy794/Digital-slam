import service from "../service/owner.js";

const createOwner = async(req,res) => {
    service.createOwner(req);
    res.send("hello")
};


export default{
    createOwner,
}