CREATE DATABASE Examen;
use Examen;

CREATE TABLE catMiembro(
	miembroId int NOT NULL PRIMARY KEY,
	miembroEdad int
);

CREATE TABLE catComidaMiembro(
	comidaId int NOT NULL PRIMARY KEY,
	miembroId int
);

/*
ID's de catMiembro
1 - Papá
2 - Mamá
3 - Hija
4 - Perro
5 - Hijo
*/

INSERT INTO catMiembro VALUES
(1, 42),
(2, 45),
(3, 19),
(4, 2),
(5, 16)
;

/*
ID's de catComidaMiembro
1 - Enchiladas
2 - Sopa
3 - Ensalada
*/

INSERT INTO catComidaMiembro VALUES
(1, 1),
(2, 5),
(3, 2)
;

SELECT * FROM catMiembro;
SELECT * FROM catComidaMiembro;

/*
Obtener todos los miembros de la familia que tengan una 
comida asignada
*/
SELECT * FROM catMiembro 
INNER JOIN catComidaMiembro 
ON catMiembro.miembroId = catComidaMiembro.miembroId;

/*
 Obtener todos los miembros de la familia con su 
 respectiva comida asignada; incluir los miembros que no 
 tienen comida asignada
 */

 SELECT * FROM catMiembro
 LEFT JOIN catComidaMiembro
 ON catMiembro.miembroId = catComidaMiembro.miembroId;