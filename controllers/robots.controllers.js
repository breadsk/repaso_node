const { request , response } = require("express");
const { robots } = require("../robots");

const getRobots = ( req = request , res = response )=> {    
    return res.json({
        ok:true,
        statusCode:200,
        robots
    });
}

const getRobotById = ( req = request , res = response )=> {    
    
    let id = parseInt(req.params.id);
    
    let robotABuscar = "";

    robotABuscar = robots.find(( robot )=> {
        return robot.id === id;
    });

    if(robotABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            robotABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay robot con ese id"
        });
    }

}

const getRobotByName = (req = request, res = response) => {    
    
    let name = req.params.name;
        
    name = name.replace(/\+/g,' ');

    let robotABuscar = "";

    robotABuscar = robots.find((robot) => {
        return robot.name.toLowerCase() === name.toLowerCase();
    });

    if(robotABuscar){
        return res.json({
            ok: true,
            statusCode: 200,
            robot: robotABuscar
        });
    } else {
        return res.json({
            ok: true,
            statusCode: 404,
            msg: "No hay robot con ese nombre"
        });
    }
};

module.exports = {
    getRobots,
    getRobotById,
    getRobotByName
}