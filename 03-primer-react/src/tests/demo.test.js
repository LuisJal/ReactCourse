
//Probando demo tests


describe('Pruebas en demo component', ()=> {

    test('Esta prueba no debbe fallar', ()=>{

        //1. Inicialización
    
        const message1= 'Hola mundo';
    
        //2.Estímulo 
    
        const message2  = message1.trim();
    
        // 3. Observar el comportamiento esperado
    
        expect(message1).toBe(message2);
    
    })


})

