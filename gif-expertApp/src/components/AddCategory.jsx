import React, { useState } from "react";
import {PropTypes} from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit= (event)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    
    
   // setCategories(categories => [inputValue,...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  }

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        className="buscador"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}