Vamos a crear un CRUD con los siguientes endpoints que, mediante Postman, nos permita:

- 1. Retornar todos los productos del array. “/api/products”,
- 2. Obtener un producto específico mediante su ID “/api/products/:id”
- 3. Agregar un nuevo producto “/api/products”,
- 4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
- 5. Eliminar un producto mediante su ID “/api/products/:id”,


# INDICACIONES 
- Correr el comando npm intsall dentro de la carpeta homework
- Correr el comando npm test, verás los test fallando
- Trabajar en el archivo 'product.js' que se encuentra dentro de la carpeta 'routes'
- Deberás hacer que los test pasen (tilde verde), teniendo en cuenta la consigna
- A medida que vas pasando los ejercicios deberás ir quitandole las 'x' a los bloques 'describe' que
- se encuentran en el archivo 'app.spec.js' dentro de la carpeta __test__