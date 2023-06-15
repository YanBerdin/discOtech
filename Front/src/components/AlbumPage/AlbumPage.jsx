import './AlbumPage.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AlbumPage() {
  const { id } = useParams();

  const [album, setAlbum] = useState();

  useEffect(() => {
    axios
      .get(`http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/albums/${id}`)
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
            <img src={album.image} alt="album" className="AlbumPage-Img" />
            <h1 className="AlbumPage-Name">{album.name}</h1>
            <h3 className="AlbumPage-ArtistName">{album.artist.fullname}</h3>
            <ul className="AlbumPage-Supports">
              {album.support.map((support) => (
                <li key={support.id} className="AlbumPage-Support">
                  {support.name}
                </li>
              ))}
            </ul>
            <p className="AlbumPage-Style">{album.style[0].name}</p>
            <ul className="AlbumPage-Songs">
              {album.songs.map((song) => (
                <li key={song.id}>
                  <h1 className="AlbumPage-SongTitle">{song.title}</h1>
                  <h3 className="AlbumPage-SongArtist">{album.artist.fullname}</h3>
                  <p className="AlbumPage-Duration">Durée : {convertToMinutes(song.duration)}</p>
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
