import express from "express";
import routes from "../routes";
import {
  users,
  userDtail,
  editProfile,
  changePassword,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDtail, userDtail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
