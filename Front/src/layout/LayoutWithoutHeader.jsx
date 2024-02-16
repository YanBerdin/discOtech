import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

/**
 * Component representing a layout without a header.
 * @returns {JSX.Element} The rendered layout without a header.
 */
const LayoutWithoutHeader = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default LayoutWithoutHeader;
