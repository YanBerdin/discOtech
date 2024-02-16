import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';

/**
 * Component representing a layout with a header.
 *
 * @returns {JSX.Element} The rendered layout with header.
 */
const LayoutWithHeader = () => (
  <>
    <NavBar />
    <Header />
    <Outlet />
  </>
);

export default LayoutWithHeader;
