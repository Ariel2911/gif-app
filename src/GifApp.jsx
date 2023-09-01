import { useState } from 'react';

export const GifApp = () => {
  const [categories, setCategories] = useState(['L1', 'L2']);

  const onAddCategory = () => {
    setCategories(['prueba', ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
