const { request , response } = require("express");
const { equipos } = require("../equipos");

const getEquipos = ( req , res )=> {    
    return res.json({
        ok:true,
        statusCode:200,
        equipos
    });
}

const getEquipoById = ( req = request , res = response )=> {    
    
    let id = parseInt(req.params.id);

    let equipoABuscar = "";

    equipoABuscar = equipos.find(( equipo )=> {
        return equipo.id === id;
    });

    if(equipoABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            equipoABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay equipos con ese id"
        });
    }

}

module.exports = {
    getEquipos,
    getEquipoById
}