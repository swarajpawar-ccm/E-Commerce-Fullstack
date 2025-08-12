import mongoose, {Schema, Document} from "mongoose";
export interface IProduct extends Document {
    name: string;
    price: number;
    category: string;
    image: string;
    description: string
} 

const ProductSchema: Schema = new Schema({
 name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
})

export default mongoose.model<IProduct>('Product', ProductSchema);