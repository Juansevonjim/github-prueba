const mysql = require("mysql");

//configurar conexión:

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "inventario"
});

//Vamos a probar si la conexion fue exitosa o no, adicionalmente, exportamos el modulo conexion.
connection.connect((err)=>{
    if(err){
        console.log("El error de conexion a BD es: " + err)
        return;
    }
    console.log("Conectado exitosamente a la BD");
});

module.exports = connection;