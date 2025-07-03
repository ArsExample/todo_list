import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({  // где то тут надо время добавить (типа до какого время выполнить)
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Task", TaskSchema);