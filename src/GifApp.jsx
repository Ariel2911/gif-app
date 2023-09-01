import { useState } from 'react';
import { AddCategory, GifGrid } from './component';

export const GifApp = () => {
  const [categories, setCategories] = useState(['saitama']);

  const onAddCategory = (newCategory) => {
    !categories.includes(newCategory) &&
      setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
