 import jwt from "jsonwebtoken";

 export default (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

    if (token){
        try {
            const decoded = jwt.verify(token, process.env.SECRET);

            req.userId = decoded._id;
            next();
        } catch(err){
            console.log(err);
            return res.status(403).json({
            message: "Access forbidden",
        });
        }

    }else{
        return res.status(403).json({
            message: "Access forbidden",
        });
    }
 }