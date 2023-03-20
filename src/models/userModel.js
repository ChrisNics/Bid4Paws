import { model, models, Schema } from 'mongoose';
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
    avatar: {
      type: String,
      required: [true, 'Please provide your avatar']
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
      street: {
        type: String,
        required: [true, 'Please provide your street address']
      },
      barangay: {
        type: String,
        required: [true, 'Please provide your barangay address']
      },
      postalCode: {
        type: Number,
        required: [true, 'Please provide your postal code']
      },
      city: {
        type: String,
        required: [true, 'Please provide your city address']
      },
      province: {
        type: String,
        required: [true, 'Please provide your province address']
      },
      geocoding: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
          required: true
        },
        coordinates: {
          type: [Number],
          required: [true, 'Please provide coordinates']
        },
        landmark: {
          type: String,
          required: [true, 'Please provide landmark']
        }
      }
    }
  },
  {
    timestamps: true
  }
);

UserSchema.index({ 'address.geocoding': '2dsphere' });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return next();
  }

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
