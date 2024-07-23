import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ with: 0, height: 0 });

  useLayoutEffect(() => {
    const{width,height}= pRef.current.getBoundingClientRect();
    setBoxSize({ width,height

    })
  }, [name]);

  return (
    <section style={{ height: 200 }}>
      <h2 ref={pRef} className="text-capitalize">
        {" "}
        #{id} - {name}
      </h2>

      <div className="d-flex flex-wrap justify-content-start">
        {sprites.map((sprite) => (
          <img className="sprite-img" alt={name} src={sprite} key={sprite} />
        ))}

        <code>{JSON.stringify(boxSize)}</code>
      </div>
    </section>
  );
};
