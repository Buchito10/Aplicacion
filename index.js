const express = require("express");
//const rutas = require("./rutas/rutasUsuarios");
const rutas = require("./rutas/rutasProductos");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",rutas);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port)
});