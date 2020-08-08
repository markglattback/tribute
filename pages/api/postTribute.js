import withDb from "../../lib/withDb";
import { Tribute } from "../../models";

const handler = async (req, res) => {
  const tribute = req.body;
  await Tribute.create(tribute);
  res.statusCode = 200;
  res.json({ message: 'success' });
};

export default withDb(handler);

export const config = {
  api: {
    bodyParser: true
  }
}