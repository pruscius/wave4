import { render, screen, asFragment } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "./index";


describe('',()=>{

   it("Se debe renderizar correctamente", () => {
     const { asFragment } = render(<Home />);
			expect(asFragment()).toMatchSnapshot();
      
   });
})


it("La etiqueta <nav> debe tener el role 'nav' ", () => {
   render(<Home/>)
	const header = screen.getByRole('nav')
   console.log(header)
   expect(header).toBeDefined()
});
