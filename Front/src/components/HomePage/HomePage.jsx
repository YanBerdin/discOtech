/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import api from '../../api/api';

import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import Header from '../Header/Header';

import './HomePage.scss';

function HomePage({
  search, albums, setSearch, getAlbums,
}) {
  const [styles, setStyles] = useState([]);
  console.log(`valeur de search dans HomePage : ${search}`);

  // Au premier rendu du composant App, je souhaite récupérer la liste des styles
  useEffect(() => {
    api.get('/styles')
      .then((res) => {
        setStyles(res.data);
      })
      .catch((err) => {
        alert('Erreur !');
        console.log('Erreur, l\'API ne fonctionne plus. Rechargez plus tard.');
        console.err(err);
      });
  }, []);

  return (
    <>
      <Header search={search} setSearch={setSearch} getAlbums={getAlbums} />
      <StylesCarousel styles={styles} />
      <h2 className="HomePage-Title">Nos Suggestions :</h2>
      <div className="HomePage-Container">
        {albums.map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
            image={album.image}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
