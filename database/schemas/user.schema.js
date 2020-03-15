import { Schema } from 'mongoose';
import sha256 from 'sha256';

const userSchema = new Schema({
  hashedPassword: { type: String, required: true },
  email: { type: String, required: true },
});

function comparePassword(password) {
  return this.hashedPassword === sha256(password);
}

userSchema.methods.comparePassword = comparePassword;

export default userSchema;
