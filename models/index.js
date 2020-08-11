import { mongoose } from '../lib/withDb';

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.SchemaTypes;

// Users
const tributeSchema = new Schema(
  {
    firstname: {
      type: String,
      default: 'Anonymous',
    },
    surname: {
      type: String,
    },
    message: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Tribute =
  mongoose.models.tribute || mongoose.model("tribute", tributeSchema, "tributes");