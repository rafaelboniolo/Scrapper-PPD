import mongoose from 'mongoose';
import { cpus } from 'os';

const SHOULD_MONGO_BE_IN_DEBUG_MODE = process.env.MONGO_DEBUG;

const configDatabase = async (): Promise<void> => {
  const DB_URL: string = process.env.MONGO_CONNECTION || "";

  const conn = await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, poolSize: cpus().length });

  conn.connection.on("connected", () => console.log("Database is connected!"));

  conn.set("debug", SHOULD_MONGO_BE_IN_DEBUG_MODE);
}


export default configDatabase;
