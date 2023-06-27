import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const LayoutWithoutHeader = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default LayoutWithoutHeader;
