/* eslint-disable no-console */

// = Import : npm
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// = Import : axios by api
import api from '../../api/api';

// Import : JSX
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import ReturnButton from '../ReturnButton/ReturnButton';

// = Import : style
import './AlbumPage.scss';

// = AlbumPage Component
function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    api
      .get(`/albums/${id}`)
      .then((res) => {
        setAlbum(res.data);
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
                <FavoriteButton id={parseInt(id, 10)} />
              </div>
            </div>

            {/* HEADER IMAGE - BUTTON */}
            <ul className="AlbumPage-Songs">
              <div className="AlbumPage-Title">
                <h1 className="AlbumPage-Name">{album.name}</h1>
                <h3 className="AlbumPage-ArtistName">{album.artist.fullname}</h3>
                <ul className="AlbumPage-Styles">
                  {album.style.map((style) => (
                    <li key={style.id} className="AlbumPage-Style">
                      {style.name}
                    </li>
                  ))}
                </ul>
                <ul className="AlbumPage-Supports">
                  {album.support.map((support) => (
                    <li key={support.id} className="AlbumPage-Support">
                      {support.name}
                    </li>
                  ))}
                </ul>
              </div>

              <li className="AlbumPage-PlaylistHead">
                <p className="AlbumPage-TrackNbHead">#</p>
                <h3 className="AlbumPage-SongTitleHead">Titres</h3>
                <h4 className="AlbumPage-SongArtistHead">Artiste</h4>
                <p className="AlbumPage-DurationHead">&#x1F552; </p>
              </li>
              {album.songs.map((song) => (
                <li key={song.id} className="AlbumPage-Playlist">
                  <p className="AlbumPage-TrackNb">{song.trackNb}.</p>
                  <h3 className="AlbumPage-SongTitle">{song.title}</h3>
                  <h4 className="AlbumPage-SongArtist">{album.artist.fullname}</h4>
                  <p className="AlbumPage-Duration">{convertToMinutes(song.duration)}</p>
                </li>
              ))}
              <p className="AlbumPage-Edition">&#xA9;&#x2117; {album.edition}</p>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlbumPage;
