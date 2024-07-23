import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("Probando useForm", () => {
  const initialForm = {
    name: "Pedro",
    email: "Luis@Luis.com",
  };

  test("Debe devolver valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result);

    expect(result.current).toEqual({
      email: initialForm.email,
      name: initialForm.name,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe cambiar el nombre del formulario", () => {
    const newValue = "Manuel";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toEqual(newValue);
    expect(result.current.formState.name).toEqual(newValue);
  });

  test('Debe resetar el  formulario', () => { 
    const newValue = 'Manuel'
    const {result} = renderHook(()=>useForm(initialForm));
    const{onResetForm,onInputChange} = result.current;
    act(()=>{
        onInputChange({ target: { name: "name", value: newValue } });
        onResetForm();
    })  

    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);

  })
});
