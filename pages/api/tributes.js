import withDb from '../../lib/withDb';
import { Tribute } from '../../models';

const handler = async (req, res) => {
  const tributes = await Tribute.find();  
  res.statusCode = 200
  res.json({ tributes });
}

export default withDb(handler);