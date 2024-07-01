import * as boardService from '../services/boardService.js'

export const createBoard = async (req, res) => {
    try {
        const userId = req.user.id;
        const boardData = req.body;
        const board = await boardService.createBoard(boardData, userId);
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteBoard = async (req, res) => {
    try {
        const boardId =  req.params.id;
        console.log('boardid: ', boardId);
        const board = await boardService.deleteBoard(boardId);
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ message: error.message  + 'ffwef' });
    }
}

export const getBoardsByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        const board = await boardService.getBoardsByUserId(userId);
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBoardById = async (req, res) => {
    try {
        const boardId =  req.params.id;
        const board = await boardService.getBoardById(boardId);
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

