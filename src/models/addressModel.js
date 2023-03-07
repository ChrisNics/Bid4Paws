import { model, models, Schema } from 'mongoose';
import User from './userModel';

const AddressSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
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
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point',
        default: 'Point'
        // required: true,
      },
      landmark: {
        type: String,
        required: [true, 'Please provide landmark']
      },
      coordinates: {
        type: [Number],
        required: [true, 'Please provide coordinates']
      }
    }
  },
  {
    timestamps: true
  }
);

const Address = models.Address || model('Address', AddressSchema);
export default Address;
