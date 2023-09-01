export const getGif = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=lXhqD4H7d7wV8l9O93HXBKIdiozskIeq&q=${category}&limit=20`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  return gifs
};