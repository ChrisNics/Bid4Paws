import { model, models, Schema } from 'mongoose';

const DogSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your dog's name"]
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your last name']
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
    age: {
      type: Number,
      required: [true, 'Please provide your age']
    },
    gender: {
      type: String,
      required: [true, 'Please provide your gender'],
      enums: ['Male', 'Female']
    },
    address: {}
  },
  {
    timestamps: true
  }
);

const Dog = models.Dog || model('Dog', DogSchema);
export default Dog;
