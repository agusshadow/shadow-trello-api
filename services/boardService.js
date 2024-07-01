import Board from "../models/boardModel.js";

export const createBoard = async (boardData, userId) => {
    try {
        const { name, description, is_public } = boardData;

        const board = new Board({
            name,
            description,
            is_public,
            created_by: userId
        });

        await board.save();
        return board;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const deleteBoard = async (boardId) => {
    try {
        await Board.deleteOne({ _id: boardId })
        return { message: 'Tablero borrado con exito' };
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const getBoardsByUserId = async (userId) => {
    try {
        const boards = await Board.find({ created_by: userId })
        return boards;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const getBoardById = async (boardId) => {
    try {
        const board = await Board.findById(boardId).populate('tasks');
        return board;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};