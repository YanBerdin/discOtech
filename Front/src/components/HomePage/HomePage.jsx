// == Imports : local
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';

// == Component
function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <SearchBar />
      <h3 className="HomePage-Suggestions"> Nos Suggestions : </h3>
      <Footer />
    </div>

  );
}
export default HomePage;
