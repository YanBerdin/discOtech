import './StylesPage.scss';

import SearchBar from '../SearchBar/SearchBar';

function StylesPage({ styles }) {
  return (
    <>
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="StylesPage">
        {styles.map((style) => (
          <div className="StylesPage-Container">
            <div className="StylesPage-Cards" key={style.id} style={{ backgroundImage: `url(${style.image})` }}>
              <h3 className="StylesPage-StyleName"> {style.name} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StylesPage;
