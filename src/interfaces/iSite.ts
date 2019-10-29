import {Document} from 'mongoose'

export interface iSiteSchema extends Document{
    
    content?:       String,
    image?:         String,
    description?:   String,
    code?:          String,
    title?:         String
    
}

export interface iSite{
    
    content?:       String,
    image?:         String,
    description?:   String,
    code?:          String,
    title?:         String
    
}

