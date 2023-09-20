import { useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header({ burgerClick }) {
  let location = useLocation();

  return (
    <header className={location.pathname === "/" ? "header header_background_blue" : "header"}>
      <div className="container">
        <Navigation burgerClick={burgerClick} />
      </div>
    </header>
  )
}

export default Header;