import mongoose, { Document,Schema } from "mongoose";
export interface IStore extends Document {
    name: string;
    location: string;
    IsActive: boolean;
}
const StoreSchema: Schema<IStore> = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    location:{
        type: String,
        required: true,
        trim: true,
    },
    IsActive:{
        type: Boolean,
        default: true,
    }
},{timestamps: true});
//model
const Store = mongoose.model<IStore>("Store", StoreSchema);
export default Store;