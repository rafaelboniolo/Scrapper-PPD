import {Document} from 'mongoose'

export interface iSite extends Document{
    
    content: String,
    image: String,
    description: String,
    code: String
    
}
