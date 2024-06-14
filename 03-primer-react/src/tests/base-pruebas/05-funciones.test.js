import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () =>{

    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    test('getUser debe retornar un objeto', () => {
        
        const user = getUser();

        expect(testUser).toEqual(user);


    });


    test('getUserActivo debe retornar un objeto', () => {
        
        const name = 'El_Papi1502'
        
        const user = getUsuarioActivo(name)

        expect(user).toEqual({
            uid:'ABC567',
            username:name
        });


    });
    

});