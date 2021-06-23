const connection = require("../../config/dbConnection");

module.exports = app => {
    app.get("/", (req,res) => {
        connection.query("SELECT * FROM repaso", (err, result) => {
            if(err){
                res.send(err);
            } else {
                res.render("../views/inventory.ejs", {
                    inventario: result
                });
            }
        })
    });

    app.get("/delete/:id_elem", (req,res) => {
        const id_elem = req.params.id_elem;
        connection.query("DELETE FROM repaso WHERE id_elem = ?", [id_elem], (err, result) => {
            if(err){
                res.send(err);
            } else {
                connection.query("SELECT * FROM repaso", (err, result) => {
                    if(err){
                        res.send(err);
                    } else {
                        res.render("../views/inventory.ejs", {
                            inventario: result,
                            alert:true,
                            ruta: ""
                        });
                    }
                })
            }
        })
    })

    app.post("/edit/:id_elem", (req,res) => {
        const id_elem = req.params.id_elem;
        const {item, elemento} = req.body
        console.log(req.body);
        connection.query("UPDATE repaso SET title = ?, elemento = ? WHERE id_elem = ?", [item, elemento, id_elem], (err, result) => {
            if(err){
                res.send(err);
            } else {
                res.redirect("/");
            }
        })
    })

    app.post("/inventory", (req,res) => {
        const {item, elemento} = req.body;
        connection.query("INSERT INTO repaso SET ?", {
            title: item,
            elemento: elemento
        }, (err, result) => {
            if(err){
                res.send(err);
            } else {
                res.redirect("/")
            }
        })
    })
};
