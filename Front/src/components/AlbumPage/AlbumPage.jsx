import './AlbumPage.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AlbumPage() {
  const { id } = useParams();

  // const album = album.find(({ id }) => id === params.id);

  const [album, setAlbum] = useState();

  useEffect(() => {
    axios.get(`http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/albums/${id}`)
      .then((res) => {
        setAlbum(res.data);
        console.log(id);
      })
      .catch((err) => {
        console.err(err);
      });
  }, [id]);

  function convertToMinutes(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  return (

    <div className="AlbumPage">
      <ul className="AlbumPage-Header">
        {album && (
        <li className="AlbumPage-Infos">
          <img src={album.image} alt="album" />
          <h1>{album.name}</h1>
          <h3>{album.artist.fullname}</h3>
          <h4>{album.support[0].name}</h4>
          <p>{album.style[0].name}</p>
          <ul>
            {album.songs.map((song) => (
              <li key={song.trackNb}>
                <h1>{song.title}</h1>
                <p>Durée : {convertToMinutes(song.duration)}</p>
              </li>
            ))}
          </ul>
        </li>
        )}
      </ul>
    </div>
  );
}

export default AlbumPage;
