import { mongoose } from '../lib/withDb';

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.SchemaTypes;

// Users
const tributeSchema = new Schema(
  {
    firstname: {
      required: true,
      type: String,
    },
    surname: {
      required: true,
      type: String,
    },
    message: {

    },
  },
  {
    timestamps: true,
  }
);

export const Tribute =
  mongoose.models.tribute || mongoose.model("tribute", tributeSchema, "tributes");