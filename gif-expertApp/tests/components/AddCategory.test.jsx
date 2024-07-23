import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("Pruebas en AddCategory", () => {
  test("debe debe de cambiar el valor de la caja de txt", () => {

    render(<AddCategory onNewCategory = {()=>{}} />)
    const input  = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value:'Saitama'}})

    expect(input.value).toBe('Saitama');



  });

  test('Debe hacer bien el submit', () => { 
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    //TODO:??
    render(<AddCategory onNewCategory = {onNewCategory} />)
    const input  = screen.getByRole('textbox');

    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value:inputValue}})
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    
   })


   test('No se Debe llamar al newCat con el inputVacio', () => { 
    const onNewCategory = jest.fn();
    //TODO:??
    render(<AddCategory onNewCategory = {onNewCategory} />)
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

    
   })

});
