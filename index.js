
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;
//----------------------------------------------------

const { getEquipos , getEquipoById } = require("./controllers/equipos.controllers")

app.use(cors());

app.get("/" , getEquipos )

app.get("/:id" , getEquipoById)

//----------------------------------------------------


app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});
