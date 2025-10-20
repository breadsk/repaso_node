
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;
//----------------------------------------------------

const { 
        getRobots , 
        getRobotById , 
        getRobotByName } = require("./controllers/robots.controllers")

app.use(cors());

//Rutas
app.get("/" , getRobots )

app.get("/:id" , getRobotById  )

app.get("/name/:name", getRobotByName )
//----------------------------------------------------


app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});
