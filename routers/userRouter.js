import express from 'express';
import routes from '../routes';
import {
  usersController,
  userDetailController,
  getEditProfileController,
  changePasswordController,
  postEditProfileController,
} from '../controllers/userController';
import { onlyPrivate, uploadAvatar } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfileController);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfileController);

userRouter.get(routes.changePassword, onlyPrivate, changePasswordController);

userRouter.get(routes.userDetail(), userDetailController);

export default userRouter;
