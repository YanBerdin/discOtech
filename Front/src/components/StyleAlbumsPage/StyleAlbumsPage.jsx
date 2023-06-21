/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReturnButton from '../ReturnButton/ReturnButton';
import api from '../../api/api';
import AlbumCard from '../HomePage/AlbumCard/AlbumCard';

function StyleAlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [style, setStyle] = useState();
  const { idStyle } = useParams();

  useEffect(() => {
    api.get(`/styles/${idStyle}`)
      .then((res) => {
        console.log(res.data);
        setAlbums(res.data.albums);
        setStyle(res.data.name);
      })
      .catch((err) => {
        console.err(err);
      });
  }, [idStyle]);

  return (
    <>
      <div className="StylesPage-Return">
        <ReturnButton />
      </div>
      <h2 className="StylesPage-Title">Parcourir les albums du genre {style}:</h2>
      <div className="StylesPage">
        {albums.map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
            image={album.image}
            id={album.id}
          />
        ))}
      </div>
    </>
  );
}

export default StyleAlbumsPage;
