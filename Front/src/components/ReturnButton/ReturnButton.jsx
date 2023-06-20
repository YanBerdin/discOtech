import './ReturnButton.scss';
import returnBtn from '../../assets/returnBtn.svg';

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

export default ReturnButton;
