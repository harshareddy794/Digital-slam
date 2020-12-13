import express from "express";
const router = express.Router();

import controller from "../controller/owner.js"


router.get("/", 
    controller.createOwner,
);


export default{
    router,
}