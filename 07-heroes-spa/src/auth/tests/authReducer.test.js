import {authReducer} from '../context/authReducer'
import { types } from '../types/types';

describe('Pruebas authReducer', () => { 

    const initialState = {
        logged: false,
      };

      const user = {
        id:'123',
        nam:'Pedro'
      }




      
 test('debe retornar el estado inicial', () => { 
    const neWState = authReducer(initialState,{})
    expect(neWState).toBe(initialState);
  })

  test('debe hacer login y establecer el user', () => { 

    const action = {
        type: types.login,
        payload:{
            name: 'Luis',
            id:'123'
        }

    }

    const state = authReducer(initialState,action)
    expect(state).toEqual({
        ...state, 
        logged: true,
        user: action.payload,
      })
   })


   test('debe borrar el nombre de usuario y dejarlo logged en false', () => { 

    const action = {
        type: types.logout,
    }

    const state =  {
        logged:true,
        user:user

    }


    const neWState = authReducer(state,action);

    expect(neWState).toEqual({logged:false})

    })


 })

 
