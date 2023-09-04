import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/component';

describe('Pruebas en <GridGifItem />', () => {
  const title = 'Saitama';
  const url = 'https://';

  test('debe de hacer match con el snapshop', () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifGridItem title={title} url={url} />);

    //opción 1
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    //opción 2
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
});
