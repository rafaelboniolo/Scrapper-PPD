import Debug from 'debug';
import dotenv from 'dotenv';
import path from 'path';

const debug = Debug('Scrapper::App')
import configDatabase from './config/database';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') })

class App {
  constructor() {
    if (!process.env.MONGO_CONNECTION) {
      debug("Variáveis de ambiente não foram configuradas!");
      process.exit(1);
    }

    configDatabase();
  }

  // private database() {
  //   const dbUrl: string = process.env.MONGO_CONNECTION || "";
  //   mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  // }
}

export default App;
