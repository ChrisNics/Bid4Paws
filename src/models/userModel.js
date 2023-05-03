import { model, models, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import Dog from './dogModel';

const UserSchema = new Schema(
  {
    dogs: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Dog'
        }
      ],
      default: []
    },
    plan: {
      type: {
        type: String,
        enum: ['Free', 'Pro', 'Premium'],
        default: 'Free'
      },
      trial: {
        type: Number,
        default: 30
      },
      swipes: {
        type: Schema.Types.Mixed,
        default: 10
      }
    },
    planToken: String,
    role: {
      type: String,
      enums: ['admin', 'owner'],
      default: 'owner'
    },
    verificationCode: {
      type: String,
      default: null
    },
    firstName: {
      type: String,
      required: [true, 'Please provide your first name']
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your last name']
    },
    fullName: {
      type: String
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
      enums: ['male', 'female']
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
        },
        radius: {
          type: Number,
          required: [true, 'Please provide radius']
        }
      }
    }
  },
  {
    timestamps: true
  }
);

UserSchema.index({ 'address.geocoding': '2dsphere' });

UserSchema.pre(/^find/, function () {
  this.populate('dogs');
});

UserSchema.pre('save', async function (next) {
  // Check if the firstName or lastName fields have been modified
  if (this.isModified('firstName') || this.isModified('lastName')) {
    // Update the fullName field with the concatenated firstName and lastName values
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  // Hash the password field if it has been modified
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.passwordConfirm = undefined;
    this.passwordResetExpires = undefined;
    this.passwordResetToken = undefined;
  }

  next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  const updateData = this.getUpdate();

  // Check if the firstName or lastName fields have been modified
  if (updateData.firstName || updateData.lastName) {
    // Update the fullName field with the concatenated firstName and lastName values
    updateData.fullName = `${updateData.firstName} ${updateData.lastName}`;
  }
  next();
});

UserSchema.methods.checkPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = models.User || model('User', UserSchema);
export default User;
