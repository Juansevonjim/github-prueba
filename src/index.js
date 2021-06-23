const app = require("./config/server");

const rutas = require("./app/routes/inventory");
rutas(app);

const connection = require("./config/dbConnection");



//Escuchar en el puerto

app.listen(app.get("port"), () => {
    console.log("Servidor en el puerto: ", app.get("port"));
})