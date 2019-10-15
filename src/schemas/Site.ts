import {Schema, model, Model, Document} from 'mongoose'
import {  iSiteSchema } from '../interfaces/iSite'

const SiteSchema = new Schema({
    content:    String,
    image:      String,
    description:String,
    code:       String,
    title:      String
})

const Site: Model<iSiteSchema> = model<iSiteSchema>("Site", SiteSchema);

export default Site;