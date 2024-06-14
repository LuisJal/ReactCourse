import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en 02-template-strings', () =>{

    test('getter retorna "Hola Fernando"', () => {
        
        const name = 'Fernando';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    });


})