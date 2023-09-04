import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
