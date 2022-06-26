const { Task } = require('../models');

module.exports.createTask = async (req, res, next)=>{
    try {
        const {body} = req;
        console.log(body)
        const task = await Task.create(body);

        res.send({data: task})
    } catch (error) {
        next(error);
    }
}