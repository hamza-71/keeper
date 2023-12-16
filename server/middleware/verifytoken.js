import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, "middlewareToken");
        req.user = decoded;
        next();


    }else {
        res.status(401).json("token is not valid!")
    }
}
export default verifyToken;