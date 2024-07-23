import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock()
describe('Pruebas en el <MultipleCustomsHook/>', () => { 


    test('debe mostrar el componente por defecto', () => { 
        
        
        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Pokedex'))
        expect(screen.getByText('Cargando....'))
        const nextButton = screen.getByRole('button',{name:'Siguiente'})
        console.log(nextButton.ariaDisabled)
        expect(nextButton)

        screen.debug();

        


     })

     test('prueba de la respuesta del useFetch', () => { 

        

      })
})