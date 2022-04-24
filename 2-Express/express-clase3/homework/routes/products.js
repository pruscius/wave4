let products = require("../utils/mock");
const express = require("express");

const router = express.Router();



/*************************************************************** 
	PUNTO 1
	- Retornar todos los productos del array. “/api/products”,
	Utiliza la variable products que se encuentra en este archivo
 ***************************************************************/
// Tu código acá

router.get('/products', (req, res) => {
	res.send(products);
})








/****************************************************************
	PUNTO 2
	- Obtener un producto específico mediante su ID “/api/products/:id”
*******************************************************************/
// Tu código acá

router.get('/products/:id', (req, res) => {
	let { id } = req.params;
	if (id) {
		let product = products.find(p => p.id == id)
		if (product) {
			res.send([product]);
		} else {
			res.status(400).send('No product found.')
		}
	}
})






/**********************************************************************
	PUNTO 3
	- Agregar un nuevo producto “/api/products”
 ***********************************************************************/
// Tu código acá

router.post('/products/add', (req, res) => {
	let product = req.body;
	if (product) {
		products.push(product);
		res.send('Product added.')
	}
	res.status(400).send('Error');
})






/************************************************************************
	PUNTO 4
	Cambiar alguna propiedad de un producto en particular 
	( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
 **************************************************************************/
// Tu código acá

router.put('/products/:id/:name', (req, res) => {
	let { id, name } = req.params;
	if (id && name) {
		// for (let i = 0; i < products.length; i++) {
		// 	if (products[i].id === id) products[i][name] = name;
		// }

		// Acá la clave fue hacerle el Number a id, porque venía como string, y en el if estaba comaparando con ===
		// lo cual nunca era true porque eran tipos de dato distintos.
		id = Number(id);
		products = products.map(p => {
			if (p.id === id) {
				p.name = name;
			}
			return p;
		})
		res.send({ name });
	}
	res.status(400).send('Error');
})





/**************************************************************************
	PUNTO 5
	Eliminar un producto mediante su ID “/api/products/:id”,
 ***************************************************************************/
// Tu código acá

router.delete('/products/:id', (req, res) => {
	let { id } = req.params;
	if (id) {
		id = Number(id);
		products = products.filter(p => p.id !== id);
		res.send(products)
	}
	res.status(400).send('Error');
})







module.exports = { router, products };
