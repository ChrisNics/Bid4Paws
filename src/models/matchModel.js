import { model, models, Schema } from 'mongoose';
import Dog from './dogModel';

// Define the schema for the Match model
const MatchSchema = new Schema(
  {
    from: {
      dog: { type: Schema.Types.ObjectId, ref: 'Dog', required: true },
      owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true }
    },
    to: {
      dog: { type: Schema.Types.ObjectId, ref: 'Dog', required: true },
      owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true }
    },
    status: {
      type: String,
      enum: ['pending', 'declined', 'accept'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

// Create the Dog model if it doesn't exist, or use the existing model
const Match = models.Match || model('Match', MatchSchema);

export default Match;
