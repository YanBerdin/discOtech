import './StylesPage.scss';

function StylesPage({ styles }) {
  return (
    <div className="StylesPage">
      {styles.map((style) => (
        <div className="StylesPage-Container">
          <div className="StylesPage-Cards" key={style.id} style={{ backgroundImage: `url(${style.image})` }}>
            <h3 className="StylesPage-StyleName"> {style.name} </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StylesPage;
