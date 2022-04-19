import ProductList from '../ProductList'
import products from "../utils/products";
const { render, screen } = require("@testing-library/react");


beforeEach(() => render(<ProductList {...products} />));
describe('',()=>{
  it('ProductList es una función',()=>{
    expect(typeof ProductList).toBe("function")
  })
  it('Debe mostrar el mensaje "Disponible : si/no" según el objeto objeto ',()=>{
    let productos = products.products;
    let content = screen.getAllByText(/Disponible/i)
    let disponible = productos .filter((x) => x.nombre != "unknown");
    //let result = [...products].map(x=>x.disponible == 'si')
    let eso = screen.queryAllByDisplayValue('si')
    console.log(eso)
   
    expect(content.length).toBe(9);
    expect(disponible.length).toBe(7);
    
  })
})