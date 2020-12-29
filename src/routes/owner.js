import express from "express";
const router = express.Router();
import util from "../helper/utils.js";

import controller from "../controller/owner.js"

// import DOMPurify from 'dompurify';



router.get(
    "/signup",
    controller.createOwnerGET,
);

router.post(
    "/signup",
    controller.createOwnerPOST,
);

router.get(
    "login",
);


export default{
    router,
}