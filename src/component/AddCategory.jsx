import { useState } from 'react';
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    // console.log('handleInputValue llamado');
  };

  const handleSubmit = (e) => {
    // console.log('handleSubmit llamado');
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      onNewCategory(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputValue(e)}
      />
    </form>
  );
};
