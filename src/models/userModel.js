import { model, models, Schema } from 'mongoose';
import Address from './addressModel';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide your first name']
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your last name']
    },
    username: {
      type: String,
      required: [true, 'Please provide your username']
    },
    password: {
      type: String,
      required: [true, 'Please provide your password']
    },
    passwordConfirm: {
      type: String,
      validate: {
        // This only works on Create and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords are not same!'
      }
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Please provide your phone number'],
      unique: true
    },
    birthDate: {
      type: Date,
      required: [true, 'Please provide the date']
    },
    age: {
      type: Number,
      required: [true, 'Please provide your age']
    },
    gender: {
      type: String,
      required: [true, 'Please provide your gender'],
      enums: ['Male', 'Female']
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address'
    }
  },
  {
    timestamps: true
  }
);

const User = models.User || model('User', UserSchema);
export default User;
