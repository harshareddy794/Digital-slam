import express from "express";
const router = express.Router();

import controller from "../controller/owner.js"


router.get("/signup", (req,res) =>{
    res.render("signup");
});


export default{
    router,
}