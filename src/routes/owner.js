import express from "express";
const router = express.Router();

import controller from "../controller/owner.js"


router.get("/signup",
    
    controller.createOwner,
);


export default{
    router,
}