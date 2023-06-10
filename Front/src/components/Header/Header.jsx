/* eslint-disable max-len */
import './Header.scss';

import videoBg from '../../assets/videoBg.mp4';

function Header() {
  return (
    // <div className="w-full h-[85vh] md:px-[80px] px-[20px] flex flex-col md:items-center justify-center">
    //   <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-5 md:text-center">
    //     Get ready to experience{' '}
    //     <span className="md:text-[#C07F00] text-white">memorable events</span>
    //   </h1>
    //   <p className="mb-2 md:text-center md:text-lg md:text-gray-100 text-white">
    //     Book your tickets to the hottest shows, concerts, and festivals around.
    //     From electrifying music concerts to action-packed sporting events, we've
    //     got you covered.
    //   </p>
    //   <p className="mb-6 md:text-center md:text-lg md:text-gray-100 text-white">
    //     Don't miss out on the memories - grab your tickets now!
    //   </p>
    //   <a href="/register">
    //     <button type="button" className="bg-white md:px-6 px-4 py-4 text-[#C07F00] rounded font-bold">
    //       CREATE YOUR EVENT TICKETS
    //     </button>
    //   </a>
    // </div>
    <div className="main">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
}
export default Header;
