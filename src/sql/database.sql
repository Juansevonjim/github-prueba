CREATE DATABASE inventario;

USE inventario;

CREATE TABLE repaso(
    id_elem INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    elemento VARCHAR(100),
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE repaso;

INSERT INTO repaso(title, elemento) values ("Repaso Martes", "50 estudiantes");

SELECT * FROM repaso;