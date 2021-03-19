import "./NavBar.css";
import Logo from "../../assets/images/logo_qrv.png";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav__wrapper">
        <div className="nav__container">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>

          <div className="nav__links">
            <a href="/" className="posts">
              Publicações
            </a>

            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
