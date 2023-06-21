/* eslint-disable no-console */
import './AlbumPage.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import ReturnButton from '../ReturnButton/ReturnButton';

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
      <div className="AlbumPage-Header">
        {album && (
          <div className="AlbumPage-Infos">

            {/* HEADER IMAGE - BUTTON */}
            <div className="AlbumPage-ImageContainer">
              <img src={album.image} alt="album" className="AlbumPage-Img" />
              <div className="AlbumPage-ReturnBtn">
                <ReturnButton />
              </div>
              <div className="AlbumPage-FavoriteBtn">
                <FavoriteButton />
              </div>
            </div>

            {/* HEADER IMAGE - BUTTON */}
            <ul className="AlbumPage-Songs">
              <div className="AlbumPage-Title">
                <h1 className="AlbumPage-Name">{album.name}</h1>
                <h3 className="AlbumPage-ArtistName">{album.artist.fullname}</h3>
                <p className="AlbumPage-Style">{album.style[0].name}</p>
                <ul className="AlbumPage-Supports">
                  {album.support.map((support) => (
                    <li key={support.id} className="AlbumPage-Support">
                      {support.name}
                    </li>
                  ))}
                </ul>
              </div>

              {album.songs.map((song) => (
                <li key={song.id} className="AlbumPage-Playlist">
                  <p className="AlbumPage-TrackNb">{song.trackNb}.</p>
                  <h1 className="AlbumPage-SongTitle">{song.title}</h1>
                  <h3 className="AlbumPage-SongArtist">{album.artist.fullname}</h3>
                  <p className="AlbumPage-Duration">{convertToMinutes(song.duration)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlbumPage;
