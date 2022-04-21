/*******************************************************************************
Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá

// Hay varios casos no contemplados en esta función, sobre todo relacionados con los tipos de datos que se ingresan
// en los parámetros.
// Por otro lado el default case es super arbitrario.

function calculatePrice(product, productPrice) {
	if (productPrice <= 0) return 'Error';
	if (!product || !productPrice) return 'ingresar ambos parámetros';

	switch (true) {
		case (productPrice <= 2000):
			return `${productPrice + 300}`;
		case (productPrice > 2000 && productPrice <= 4000):
			return `${productPrice + 500}`;
		case (productPrice > 4000):
			return `${productPrice + 700}`;
		default: return 'Algo salió mal.'
	}
}



module.exports = {
	calculatePrice,
};
