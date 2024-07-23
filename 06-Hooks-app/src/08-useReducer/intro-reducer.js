//Estado inicial
const initialState = [
  {
    id: 1,
    todo: "Recolectar piedra del alma",
    done: false,
  },
];

//La action es la que le va a decir como quiero que cambie el estado
//Esto es una funcion que basicamente devuelve un estado

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

//Añadir una nueva tarea sin mutar el array, le mando una accion que le diga como debe camabiar su estado

const newTodo = {
  id: 2,
  todo: "Recolectar piedra del poder",
  done: false,
};

//Creo una funcion que va a ser la action del reducer

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};
// Se lo mando al reducer en forma de action para que cambie su estado.

todos = todoReducer(todos, addTodoAction);

console.log(todos);
