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

  test('debe mostrar items cuando se cargan las imagenes', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: 'abd',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
