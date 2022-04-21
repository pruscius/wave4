const { products } = require('../homework/utils/mock');

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
let addingIdToProduct = (products) => {
	for (let i = 0; i < products.length; i++) {
		products[i].id = i + 1;
	}
	return products;
}




/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
let returningTheNames = function () {
	let names = []
	products.forEach(p => names.push(p.name));
	return names;
}





/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
let searchID = (id) => {
	let product = products.find(p => p.id === id);
	if (product) return product;
	return 'no hubo coincidencias'
}




/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
let matchingColors = (color) => {
	let matchingProducts = [];
	for (let i = 0; i < products.length; i++) {
		let match = products[i].colors.find(c => c === color);
		if (match) matchingProducts.push(products[i])
	}
	return matchingProducts;
}



/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
let colorsLength = () => {
	return products.filter(p => p.colors.length === 0);
}



/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
let addProduct = (product) => {
	if (product.name && product.price && product.quantity && product.colors) {
		products.push(product);
	}
	return products;
}




/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
let deleteProduct = () => {
	// Esta no lo elimina estrictamente, sino que devuelve un array sin el producto.
	// Para eliminarlo habría que encontrar el elemento y su índice y usar .splice o .slice
	return products.filter(p => p.quantity !== 0);
}




/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
let existingProducts = (products) => {
	let quantity = 0;
	products.forEach(p => quantity += p.quantity);
	return quantity;
}





/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá

// Esta devuelve 5 en vez de 4 en el último test porque quedó un obj con name 'Benito'  con price 100 colgado en algún lado
// y no pasa el test.
let showHigherPrice = (products, price) => {
	// let prods = products.filter(p => p.price > price);
	// console.log('PRODSSSSSS', prods, 'END PRODS')
	// return prods;


	return products.filter(p => p.price > price);
}






module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};