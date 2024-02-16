// == Import : local
import returnBtn from '../../assets/returnBtn.svg';

// == Import : style
import './ReturnButton.scss';

/**
 * Component representing a return button.
 * @returns {JSX.Element} The return button component.
 */
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
