const express = require("express");
const router = express.Router();

/************************************************************* 
	EJERCICIO 
	1-Crear un endpoint que utilice el método GET y 
	devuelva como respuesta el mensaje “Hola mundo!”. 
	2-Probar que el mensaje llega al navegador.
 ************************************************************/
// Tu código acá

router.get('/', (req, res) => {
	res.send('¡Hola mundo!');
})



/*************************************************************
	EXTRA
	1-Crear un array de productos usando la variable products
	2-Crear otro método Get cuya ruta sea '/products'
	3-Responder con el array al ingresar a '/products'
 *************************************************************/
// Tu código acá
let products = [
	{ id: 1, name: 'Playstation', price: 50000 },
	{ id: 2, name: 'Bicicleta', price: 20000 },
	{ id: 3, name: 'Cuerdas de guitarra', price: 2000 }
];

router.get('/products', (req, res) => {
	// console.log(products)
	res.send({ products });
})

module.exports = { router, products };
