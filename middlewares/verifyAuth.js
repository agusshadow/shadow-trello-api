import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtKey = process.env.JWT_KEY;
export const revokedTokens = new Set();

export const verifyAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('No token provided');
    }

    if (revokedTokens.has(token)) {
        return res.status(403).send('Token has been revoked');
    }

    jwt.verify(token, jwtKey, (err, user) => {
        if (err) {
            return res.status(403).send('Failed to authenticate token');
        }

        req.user = user;
        next();
    });
};