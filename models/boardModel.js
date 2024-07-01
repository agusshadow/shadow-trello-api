import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String
    },
    is_public: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

boardSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'board_id'
});

boardSchema.set('toObject', { virtuals: true });
boardSchema.set('toJSON', { virtuals: true });

const Board = mongoose.model('Board', boardSchema);

export default Board;
