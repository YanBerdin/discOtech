// == Import : local
import './Field.scss';

// == Composant
function Field({
  value,
  type,
  name,
  placeholder,
}) {
  return (
    <div className="Field">
      <input
      // React - state
        value={value}
      // Vanillas info
        type={type}
        className="Field-Input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

// == Export
export default Field;
