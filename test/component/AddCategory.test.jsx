import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/component';

describe('Pruebas en <AddCategory />', () => {
  const inputValue = 'Saitama';

  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);

    // screen.debug();
  });
});
