import { useState } from "react";
import { AddCategory,GiffGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Papa']);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    //setCategories(['Valorant',...categories]);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories = {setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => {
        return <GiffGrid key={category} category={category} />;
      })}
    </>
  );
};

//const apiKey = "kLfb9BxEEvOIHyN9JAlJKke0u9n4hfpB";
