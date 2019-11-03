import { Document } from 'mongoose'

export interface ISiteSchema extends Document {
  content?: string;
  image?: string;
  description?: string;
  code?: string;
  title?: string;
}

export interface ISite {
  content?: string;
  image?: string;
  description?: string;
  code?: string;
  title?: string;
}

