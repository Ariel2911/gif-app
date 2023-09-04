import { render } from '@testing-library/react';
import { GifGridItem } from '../../src/component';

describe('Pruebas en <GridGifItem />', () => {
  const title = 'Saitama';
  const url = 'https://';

  test('debe de hacer match con el snapshop', () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
