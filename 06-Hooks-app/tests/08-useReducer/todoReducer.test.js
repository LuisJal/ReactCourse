import { todoReducer } from "../../src/08-useReducer/toDoReducer";

describe("Pruebas todoReducer", () => {
  const initialState = [
    {
      id: 1,
      desc: "Demo Todo",
      done: false,
    },
  ];

  test("debe regresar estado inicial", () => {
    const neWState = todoReducer(initialState, {});
    expect(neWState).toBe(initialState);
  });

  test("debe agregar un Todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        desc: "Nuevo todo2",
        done: false,
      },
    };
    const neWState = todoReducer(initialState, action);
    expect(neWState.length).toBe(2);
    expect(neWState).toContain(action.payload);
  });

  test("debe eliminar un Todo", () => {
    const actionEliminar = {
      type: "[TODO] Delete Todo",
      payload: 1, //Esta expectiong un solo id, no un objeto.
    };

    const neWState = todoReducer(initialState, actionEliminar);
    console.log(neWState);
    expect(neWState.length).toBe(0);
  });

  test("Debe realizar el toggle del todo", () => {
    const actionToggle = {
      type: "[TODO] Toggle Todo",
      payload: 1, //Esta expectiong un solo id, no un objeto.
    };

    const neWState1 = todoReducer(initialState, actionToggle);
    expect(neWState1[0].done).toBeTruthy;
    const neWState2 = todoReducer(initialState, actionToggle);
    expect(neWState2[0].done).toBeFalsy;
  });
});
