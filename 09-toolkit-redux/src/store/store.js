import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemSlice'
import { todosApi } from './apis/todosApis'

export const store = configureStore({
  reducer: {
    pedro: counterSlice.reducer,
    pokemons:pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,


  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})
