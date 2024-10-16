import 'dotenv/config';

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const JWT_KEY = process.env.JWT_KEY;

export { PORT, MONGODB_URL, JWT_KEY };