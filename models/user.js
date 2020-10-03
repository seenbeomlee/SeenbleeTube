import mongoose from 'mongoose';
import passportLocalmongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

UserSchema.plugin(passportLocalmongoose, { usernameField: 'email' });

const model = mongoose.Model('User', UserSchema);

export default model;
