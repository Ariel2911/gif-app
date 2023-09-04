import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/component';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  });

  const category = 'One Punch';

  test('debe mostrar el loaging y las categorias inicialmente', () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
});
