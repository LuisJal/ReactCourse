import React, { useState } from 'react'
import { UserContext } from './UserContext'

/* const user = {
   id: 123,
   name: 'Luis Palacios',
   email: 'luis@luis.com' 
} */

export const UserProvider = ({children}) => {
    const [user, setuser] = useState();

  return (
    <UserContext.Provider value={{user, setuser}}>
        {children}
    </UserContext.Provider>
  )
}
