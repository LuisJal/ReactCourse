import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp', () =>{

    test('getHeroeById debe retornar un heroe por id', () => {
        
        const heroe = 1
        const hero = getHeroeById(heroe);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });


    test('getHeroeById debe retornar undefinded si no existe', () => {
        
        const heroe = 100
        const hero = getHeroeById(heroe);
        expect(hero).toBeFalsy();
        
    });



    test('getHeroeByOWner debe retornar un heroe en objeto por owner', () => {
        
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'} ,
            {id: 3, name: 'Superman', owner: 'DC'} ,
            {id: 4, name: 'Flash', owner: 'DC'} 
        ])

    });


   


})