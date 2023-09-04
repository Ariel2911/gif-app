import { getGif } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  
  test('debe de retornar un arreglo', async() => {
    const gifs = await getGif('One Punch');
    
    expect(Array.isArray(gifs)).toBe(true)

  });

  test('debe de retornar un arreglo que contenga como mínimo un objeto con: id, title, url', async() => {
    const gifs = await getGif('One Punch');    
    
    expect(gifs.length).toBeGreaterThan(0)

    expect(gifs[0]).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    })

  });
});
