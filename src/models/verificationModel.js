import { model, models, Schema } from 'mongoose';

// Define the schema for the Match model
const VerificationSchema = new Schema(
  {
    verificationCode: {
      type: String
    },
    email: { type: String }
  },
  {
    timestamps: true
  }
);

const Verification = models.Verification || model('Verification', VerificationSchema);

export default Verification;
