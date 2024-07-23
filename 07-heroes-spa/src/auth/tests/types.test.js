import { types } from "../types/types"

describe('Pruebas en los types', () => { 
    test('debe regresar ambos types', () => { 
        expect(types).toEqual({login: '[Auth] Login', logout: '[Auth] Logout'})
     })
 })