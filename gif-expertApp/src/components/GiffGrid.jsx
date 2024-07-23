import React, { useState, useEffect } from "react";
import { Giffitem } from "./Giffitem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

export const GiffGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>) 
      }
      <div key={category} className="card-grid">
        {images.map((image) => {
          return (
            <>
              <Giffitem key={image.id} {...image} />
            </>
          );
        })}
      </div>
    </>
  );
};

GiffGrid.propTypes = {
  category: PropTypes.string.isRequired
}
