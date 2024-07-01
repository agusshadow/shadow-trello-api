import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    board_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'in-review', 'done'],
        default: 'todo',
        required: true
    },
    label_ids: {
        type: [String]
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
