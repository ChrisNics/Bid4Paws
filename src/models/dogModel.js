import { model, models, Schema } from 'mongoose';
import User from './userModel';

// Define the schema for the Dog model
const DogSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isCurrent: {
      type: Boolean,
      required: [true, 'Please provide if this dog is current'],
      default: false
    },
    isApproved: {
      status: {
        type: String,
        enum: ['Approved', 'Declined', 'Pending'],
        default: 'Pending'
      },
      comment: {
        type: String,
        default: null
      }
    },
    name: {
      type: String,
      required: [true, "Please provide your dog's name"]
    },
    avatar: {
      type: String,
      required: [true, "Please provide your dog's avatar"]
    },
    breed: {
      type: String,
      required: [true, "Please provide your dog's breed"]
    },
    bloodLine: {
      type: String,
      required: [true, "Please provide your dog's bloodline"]
    },
    birthDate: {
      type: Date,
      required: [true, "Please provide your dog's birth date"]
    },
    age: {
      type: Number,
      required: [true, "Please provide your dog's age"]
    },
    gender: {
      type: String,
      required: [true, "Please provide your dog's gender"],
      enum: ['Male', 'Female']
    },
    height: {
      type: Number,
      required: [true, "Please provide your dog's height"]
    },
    weight: {
      type: Number,
      required: [true, "Please provide your dog's weight"]
    },
    color: {
      type: String,
      required: [true, "Please provide your dog's color"]
    },
    images: {
      type: Array,
      required: [true, "Please provide your dog's images"]
    },
    caption: {
      type: String,
      required: [true, "Please provide your dog's caption"]
    },
    certificate: {
      type: String,
      required: [true, "Please provide your dog's certificate"]
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

DogSchema.index({ 'address.geocoding': '2dsphere' });

// Create the Dog model if it doesn't exist, or use the existing model
const Dog = models.Dog || model('Dog', DogSchema);

export default Dog;
