import React from "react";
import { useCounter, useFetch } from "../hooks";
import Button from "react-bootstrap/esm/Button";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

/* React esta renderizando este componente cada vez que este sufre un cambio en el caso de hacer una llamada a una API
no nos combiene que le haga mil llamdas, por ello voy a crear un hook que
es basicamente una funcion que va a encargarse de dicha llamada*/

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Pokedex</h1>
      <hr />
      {isLoading ? <LoadingMessage/>
      : <PokemonCard 
      id= {counter} 
      name={data.name}
      sprites={[
        data.sprites.front_default,
        data.sprites.back_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny
      ]}  />}

      <Button className="btn btn-primary mt-3 me-3 " onClick={() => counter>1 ? decrement():null}>
        Anterior
      </Button>

      <Button className="btn btn-primary mt-3 me-3" onClick={() => increment()}>
        Siguiente
      </Button>
    </>
  );

 
};
