import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  first_name: {
    type: String,
    required: [true, 'Please provide first name'],
  },
  last_name: {
    type: String,
    required: [true, 'Please provide first name'],
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
