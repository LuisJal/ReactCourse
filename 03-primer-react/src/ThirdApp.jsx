import React from "react";
import PropTypes from "prop-types";
import { FirstApp } from "./FirstApp";

export const ThirdApp = ({ titulo, subtitulo }) => {
  return (
    <>
      <div data-testid="test-tittle">{titulo}</div>
      <h1 data-testid="test-subt">{subtitulo}</h1>
    </>
  );
};



ThirdApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
};

ThirdApp.defaultProps = {
  titulo: "Al toque",
  subtitulo: "no hay subtitulo",
};
 