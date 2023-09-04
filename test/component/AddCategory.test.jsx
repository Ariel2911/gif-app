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

  test('debe comprobar que el formulario se vacíe solo cuando se ingresen más de 2 caracteres', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //Debe probocar que la prueba falle
    // fireEvent.input(input, { target: { value: 'a' } });
    // fireEvent.input(input, { target: { value: 'ab' } });

    //Debe probocar que la prueba pase
    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    expect(input.value).toBe('');

    // screen.debug();
  });

  test('debe comprobar que la función onNewCategory no es llamada cuando el valor de la caja de texto este vacia o tenga menos de 2 caracteres', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: '' } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: 'a' } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: 'ab' } });
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
