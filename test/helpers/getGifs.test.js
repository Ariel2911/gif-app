import { getGif } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  
  test('debe de retornar un arreglo', async() => {
    const gifs = await getGif('One Punch');
    
    expect(Array.isArray(gifs)).toBe(true)

  });
});
