const service = require ("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res){
    const showing = req.query.is_showing;
    const data = showing ? await service.listInTheaters() : await service.list();
    res.json({data: data})
}

async function read(req,res){
    const {movieid} = req.params;
    const data = await service.read(movieid)
    res.json({data: data})
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
}