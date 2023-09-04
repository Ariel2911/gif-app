import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/component';

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe mostrar el loaging y las categorias inicialmente', () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
});
