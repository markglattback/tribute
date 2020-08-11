import withDb from "../../lib/withDb";
import { Tribute } from "../../models";

const handler = async (req, res) => {
  const tribute = req.body;

  try {
    await Tribute.create(tribute);
  } catch(err) {
    res.statusCode = 400;
    return res.json({ message: 'There was a problem submitting your message. Please check all required fields have been completed.' })
  }

  res.statusCode = 200;
  return res.json({ message: 'success' });
};

export default withDb(handler);