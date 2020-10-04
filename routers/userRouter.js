import express from 'express';
import routes from '../routes';
import {
  usersController,
  userDetailController,
  getEditProfileController,
  getChangePasswordController,
  postEditProfileController,
  postChangePasswordController,
} from '../controllers/userController';
import { onlyPrivate, uploadAvatar } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfileController);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfileController);

userRouter.get(routes.changePassword, onlyPrivate, getChangePasswordController);
userRouter.post(routes.changePassword, onlyPrivate, postChangePasswordController);

userRouter.get(routes.userDetail(), userDetailController);

export default userRouter;
