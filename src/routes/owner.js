import express from "express";
const router = express.Router();
import util from "../helper/utils.js";
// import domPurify from "dompurify";

import controller from "../controller/owner.js"


import DOMPurify from 'dompurify';



router.get("/signup", (req,res) =>{
    res.render("signup");
});

router.post("/signup", async(req,res) => {
    const dirty = req.body.email;
    var clean = DOMPurify.sanitize(dirty);
    console.log(clean);
    // console.log(domPurify.sanitize(req.body));
    res.send("HEllo");
})


export default{
    router,
}