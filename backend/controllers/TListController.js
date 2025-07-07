import TListModel from "../models/TList.js"
import TaskModel from "../models/Task.js"

export const getAll = async (req, res) => {
    try {
        const tlists = await TListModel.find({creator: req.userId}).populate("tasks");

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
        const tlist = await TListModel.findById(todoListId).populate("tasks");

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
            tasks: [],
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

export const createTask = async (req, res) => { // пиздец че тут происходит
    try{
        const todoListId = req.params.id;
        var tlist = await TListModel.findById(todoListId);

        if (!tlist){
            return res.status(404).json({
                message: "tlist not found",
            });
        }

        const doc = new TaskModel({
            name: req.body.task_name,
            completed: req.body.task_completed,
        });

        

        const task = await doc.save();


        tlist.tasks.push(task);
        tlist = await tlist.save(); 

        // await TListModel.updateOne({
        //     _id: todoListId,
        // },
        // {
        //     name: req.body.name,
        //     creator: req.userId,
        //     tasks: req.tasks,
        // });

        res.json({tlist});
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "task create error",
        });
    }
};

export const patchTask = async (req, res) => { // ну сука пж научите меня программировать я не могу
    try{
        const todoListId = req.params.id;  // я хуй знает мб это и не надо
        const taskId = req.params.taskid;
        //var tlist = await TListModel.findById(todoListId);
        // парни только не упадите
        var _task = await TaskModel.findById(taskId);

        if (!_task){
            return res.status(404).json({
                message: "task not found",
            });
        }

        // я уверен что это делается через Model.updateOne или че то такое но я никогда больше noSQL юзать не буду
        _task.name = req.body.task_name;
        _task.completed = req.body.task_completed;


        const task = await _task.save();

        res.json({task});  // я правда не ебу че возвращать я просто хочу спать
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: "task patch error",
        });
    }
};