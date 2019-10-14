import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

const debug = require('debug')('Scrapper::App')

dotenv.config({ path: path.resolve(__dirname, '..', '.env') })

class App {
  constructor() {
    if (!process.env.MONGO_CONNECTION) {
      debug("Variáveis de ambiente não foram configuradas!");
      process.exit(1);
    }

    this.database();
  }

  database() {
    const dbUrl: string = process.env.MONGO_CONNECTION || "";
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

  }
}

export default App;
