import TListModel from "../models/TList.js"

export const getAll = async (req, res) => {
    try {
        const tlists = await TListModel.find({creator: req.userId});

        res.json(tlists);
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "An error has occured while trying to get TodoLists",
        });
    }
};

export const testGetAll = async (req, res) => {
    try {
        const tlists = await TListModel.find({});

        res.json(tlists);

        
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "An error has occured while trying to get TodoLists",
        });
    }
};

export const getOne = async (req, res) => {
    try{
        const todoListId = req.params.id;
        const tlist = await TListModel.findById(todoListId);

        if (!tlist){
            return res.status(404).json({
                message: "Todo list not found",
            });
        }

        if (tlist.creator != req.userId)
        {
            return res.status(403).json({
                message: "Can't access to another user's TodoList"
            });
        }

        res.json(tlist);
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "TodoList get error",
        });
    }
};

export const removeOne = async (req, res) => {
    try{
        const todoListId = req.params.id;

        TListModel.findOneAndDelete({_id: todoListId}).then((err, doc) => {
            if (err){
                console.log("error: ", err);
                return res.status(500).json({
                    message: "TodoList delete error"
                });
            }

            if (!doc){
                return res.status(404).json({
                    message: "TodoList not found"
                });
            }

            res.json({
                success: true,
            });
        });
        
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "TodoList get error",
        });
    }
};

export const create = async (req, res) => {
    try{
        const doc = new TListModel({
            name: req.body.name,
            creator: req.userId,
        });

        const tList = await doc.save();

        res.json(tList);
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "TodoList creation error",
        });
    }
};