// == Import : local
import returnBtn from '../../assets/returnBtn.svg';

// == Import : style
import './ReturnButton.scss';

// when clicked, button go to the previous page
const ReturnButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button type="button" className="back-button" onClick={handleGoBack}>
      <img src={returnBtn} alt="button" />
    </button>
  );
};

// == Export
export default ReturnButton;
