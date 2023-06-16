import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import videoBg from '../../assets/retro.mp4';

function Header() {
  // const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState('pink floyd');

  const getAlbums = () => {
    axios.get(`http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/albums/?q=${search}`)
      .then((res) => {
        // setTotalCount(res.data.total_count);
        setAlbums(res.data.albums);
      })
      .catch((err) => {
        alert('Erreur !');
        console.log('Erreur, l\'API ne fonctionne plus. Rechargez plus tard.');
        console.error(err); {/* Utilisez console.error au lieu de console.err */}
      });
  };
  useEffect(getAlbums, []);

  return (
    <div className="Header">
      <div className="Header-Overlay" />
      <video className="Header-Video" src={videoBg} autoPlay loop muted />
      <div className="Header-Content">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-3 md:text-center">
          DISC'OTECH</h1>
        <p className="mb-2 md:text-center md:text-lg md:text-100 text-white Header-Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores.
        </p>
      </div>
      <SearchBar
        value={search}
        setSearch={setSearch}
        getAlbums={getAlbums} {/* Utilisez getAlbums au lieu de getRepositories */}
      />
    </div>
  );
}
export default Header;