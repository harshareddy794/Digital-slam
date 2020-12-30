//  Imporing express router
import express from "express";
const router = express.Router();

// Imporing controller
import controller from "../controller/owner.js";

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
    controller.confirmPassword,
);

export default{
    router,
}