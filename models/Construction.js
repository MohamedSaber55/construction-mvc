import { Schema, model } from "mongoose";

const ConstructionSchema = new Schema({
    place: { type: String, required: true },
    redBricks: { type: Number, required: true },
    solidBricks: { type: Number, required: true },
    totalBricks: { type: Number, required: true },
    receivedAmount: { type: Number, required: true },
    receivedDate: { type: Date, default: Date.now }
});

export default model("Construction", ConstructionSchema);
