import mongoose from "mongoose";

const TListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
    }],
}, {
    timestamps: true,
});

export default mongoose.model("TList", TListSchema);