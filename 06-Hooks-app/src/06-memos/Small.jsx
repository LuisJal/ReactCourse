import { memo } from "react";

//Memorizo componentes cuando son muy grandes
export const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar");
    
  return <small>{value}</small>;
});
