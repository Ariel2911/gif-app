import { useState } from 'react';
import { AddCategory } from './component/AddCategory';

export const GifApp = () => {
  const [categories, setCategories] = useState(['L1', 'L2']);

  const onAddCategory = (newCategory) => {
    !categories.includes(newCategory) &&
      setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
