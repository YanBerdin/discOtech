import './StylesPage.scss';

import Header from '../Header/Header';
import ReturnButton from '../ReturnButton/ReturnButton';

function StylesPage({ styles }) {
  return (
    <>
      <div className="StylesPage-Header">
        <Header />
      </div>
      <div className="StylesPage-Return">
        <ReturnButton />
      </div>
      <h2 className="StylesPage-Title">Parcourir les styles :</h2>
      <div className="StylesPage">
        {styles.map((style) => (
          <div className="StylesPage-Container" key={style.id}>
            <div className="StylesPage-Cards" style={{ backgroundImage: `url(${style.image})` }}>
              <h3 className="StylesPage-StyleName"> {style.name} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StylesPage;
