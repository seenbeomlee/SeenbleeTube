import express from 'express';
import routes from '../routes';
import {
  usersController,
  userDetailController,
  getEditProfileController,
  changePasswordController,
} from '../controllers/userController';
import { onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfileController);
userRouter.get(routes.changePassword, onlyPrivate, changePasswordController);
userRouter.get(routes.userDetail(), userDetailController);

export default userRouter;
