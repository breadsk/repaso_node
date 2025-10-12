
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;
//----------------------------------------------------

const { getRobots , getRobotById } = require("./controllers/robots.controllers")

app.use(cors());

app.get("/" , getRobots )

app.get("/:id" , getRobotById  )

//----------------------------------------------------


app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});
