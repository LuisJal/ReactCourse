import { MemoryRouter, Route, Routes } from "react-router";
import { AuthContext, AuthProvider } from "../auth";
import { PublicRoutes } from "../router/PublicRoutes";
import { screen, render } from "@testing-library/react";

describe('Pruebas en <PublicRoute />', () => {
    
    test('debe de mostrar el children si no está autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoutes>
                    <h1>Ruta pública</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();

    });


    test('debe de navegar si está autenticado', () => { 

        
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoutes>
                                <h1>Ruta pública</h1>
                            </PublicRoutes>
                        } />
                        <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel') ).toBeTruthy();


    })

});
