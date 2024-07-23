import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation} from 'react-router'

//Recibo un children porque voy a almacenar los componentes (MArvelPAges, DcPages etc...) dentro de este high order component
//Que va a tener la logica que determina que son privadas
export const PrivateRoute = ({children}) => {
    const {logged} = useContext(AuthContext)
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );

   //Si esta loggeado le devuelvo el children... es decir  (MArvelPAges, DcPages etc...) 
  return (logged) ? children : <Navigate to='/login' />
    
  
}

// con esto me voy a atacar al approuter que se encarga de todas las rutas y voy a encapsular <HeroesRoutes> dentro de este.
