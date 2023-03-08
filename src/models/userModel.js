import { model, models, Schema } from 'mongoose';
import Address from './addressModel';
import bcrypt from 'bcrypt';

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
      required: [true, 'Please provide your username'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please provide your password'],
      select: false
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

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.fullName = `${this.firstName} ${this.lastName}`;
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  this.passwordResetExpires = undefined;
  this.passwordResetToken = undefined;
  next();
});

UserSchema.methods.checkPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = models.User || model('User', UserSchema);
export default User;
