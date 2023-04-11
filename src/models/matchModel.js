import Dog from './dogModel';
import { model, models, Schema } from 'mongoose';

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

MatchSchema.pre(/^find/, function () {
  this.populate('from.dog').populate('to.dog');
});

const Match = models.Match || model('Match', MatchSchema);

export default Match;
