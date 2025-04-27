import express from "express";
import {
  createUser,
  getAllUser,
  getAllUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/user", validateUser, createUser);
router.get("/user", getAllUser);
router.get("/user/:id", getAllUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
