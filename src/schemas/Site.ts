import { Model, model, Schema } from 'mongoose'
import { ISiteSchema } from '../interfaces/iSite'

const SiteSchema = new Schema({
  content: String,
  description: String,
  image: String,
  title: String,
  url: String
})

const Site: Model<ISiteSchema> = model<ISiteSchema>("Site", SiteSchema);

export default Site;
