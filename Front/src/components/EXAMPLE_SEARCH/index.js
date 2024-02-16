// Page d'ecemple inutilisée dans l'app

/**
 * Example for searching albums or artists.
 * @returns {JSX.Element} The search component.
 */
const Search = () => {
  const [type, setType] = useState('albums');

  // des states pour stocker les possibles albums, ou artiste etc.

  // Créer un event au click sur les select pour changer le type

  // Créer un event quand on tape dans le champ de cherche
  // cet event a des conditions par rapport au type,
  // en fonction du type on fait tel ou tel appel API.

  return (
    <>
      <div>
        <select>
          <option value="albums">Album</option>
          <option value="artist">Artiste</option>
        </select>
      </div>
      <input />
    </>

  );
  // une fois la recherche faite, mettre des conditions
  // sur chacun des state qui contient soit album soit artiste etc,
  // si ils sont pas vide, afficher les résultats
};
