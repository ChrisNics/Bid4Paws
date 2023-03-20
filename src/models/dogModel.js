import { model, models, Schema } from 'mongoose';

// Define the schema for the Dog model
const DogSchema = new Schema(
  {
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
      required: [true, "Please provide your dog's bloodline"],
      unique: true
    },
    birthDate: {
      type: Date,
      required: [true, "Please provide your dog's birth date"],
      unique: true
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
    }
  },
  {
    timestamps: true
  }
);

// Create the Dog model if it doesn't exist, or use the existing model
const Dog = models.Dog || model('Dog', DogSchema);

export default Dog;
