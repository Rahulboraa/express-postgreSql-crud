import express from "express";

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUser);
router.get("/user/:id", getAllUserById);
router.put("/user/:id", updateUserById);
router.delete("/user/:id", deleteUser);

export default router;
