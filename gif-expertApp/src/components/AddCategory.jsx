import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit= (event)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 0) return;
    
    onNewCategory(inputValue.trim());
   // setCategories(categories => [inputValue,...categories]);
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
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
