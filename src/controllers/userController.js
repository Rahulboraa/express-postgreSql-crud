import {
  createUserService,
  deleteUserService,
  getAllUserByIdService,
  getAllUserService,
  updateUserService,
} from "../models/userModel.js";

//Standard Response
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    return handleResponse(res, 201, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const user = await getAllUserService();
    return handleResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

export const getAllUserById = async (req, res, next) => {
  try {
    const user = await getAllUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    return handleResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserService(req.params.id, name, email);
    if (!updatedUser) return handleResponse(res, 404, "User not found");
    return handleResponse(res, 200, "User fetched successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await deleteUserService(req.params.id);
    if (!deleteUser) return handleResponse(res, 404, "User not found");
    return handleResponse(res, 200, "User deleted successfully", deleteUser);
  } catch (error) {
    next(error);
  }
};
