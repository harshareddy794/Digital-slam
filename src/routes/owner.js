import joi from "joi";

//  Imporing express router
import express from "express";
const router = express.Router();

// Imporing controller
import controller from "../controller/owner.js";

// Importing joi middleware
import joivalidation from "../middleware/joiSchemaValidation.js"

router.get(
    "/signup",
    controller.createOwnerGET,
);

router.post(
    "/signup",
    controller.createOwnerPOST,
);

router.get(
    "/login",
);

router.get(
    "/confirm-email",
    controller.confirmEmail,
);

export default{
    router,
}