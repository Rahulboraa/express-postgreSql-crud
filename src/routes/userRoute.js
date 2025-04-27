import express from "express";
import {
  createUser,
  getAllUser,
  getAllUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUser);
router.get("/user/:id", getAllUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
