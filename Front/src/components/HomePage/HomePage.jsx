/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import StylesCarousel from '../StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import Header from '../Header/Header';

import './HomePage.scss';

function HomePage() {
  const [styles, setStyles] = useState([]);
  const albums = useSelector((state) => state.albums);
  console.log(`state albums depuis home page ${albums}`);

  // Au premier rendu du composant App, je souhaite récupérer la liste des styles
  useEffect(() => {
    axios.get('http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/styles')
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
      <Header />
      <StylesCarousel styles={styles} />
      <h4 className="HomePage-Title">Nos Suggestions :</h4>
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
