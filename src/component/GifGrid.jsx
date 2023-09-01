import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GridGifItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
