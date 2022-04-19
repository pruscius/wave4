import React,{useId} from 'react';


const ProductList =({products})=>{
 
return <>{products.map(({nombre,color}) => {
  return (
		<section key={useId()}>
			<h1>{nombre}</h1>
			<h4>{color.map((x) => x.colors)}</h4>
			<p>Disponible : {color[0].disponible ? 'si': 'no'}</p>
		</section>
	);
})}</>;
}

export default ProductList