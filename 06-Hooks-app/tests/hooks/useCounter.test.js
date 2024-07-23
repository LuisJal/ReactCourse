import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";
import { act } from "react";

describe("Pruebas en el useCounter", () => {
  test("Debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe generar el counter con valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test('Fucniona increment??', () => { 
    const { result } = renderHook(() => useCounter());
    const{increment} = result.current;
    act(()=>{
        increment();
    })

    expect(result.current.counter).toEqual(11); 


   })
   test('Fucniona decrement??', () => { 
    const { result } = renderHook(() => useCounter());
    const{decrement} = result.current;
    act(()=>{
        decrement();
    })

    expect(result.current.counter).toEqual(9); 


   })
   test('Fucniona reset??', () => { 
    const { result } = renderHook(() => useCounter());
    const{increment,reset,decrement} = result.current;
    act(()=>{
        increment();
        decrement();
        reset();
    })

    expect(result.current.counter).toEqual(10); 


   })
});
