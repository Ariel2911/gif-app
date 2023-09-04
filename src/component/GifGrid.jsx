import PropTypes from 'prop-types';
import { GifGridItem } from './GridGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <p>Cargando...</p>}
      {images.length > 0 ? (
        <div className="card-grid">
          {images.map(({ id, title, url }) => (
            <GifGridItem key={id} title={title} url={url} />
          ))}
        </div>
      ) : (
        <p>No se encontraron imagenes</p>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
