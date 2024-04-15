import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./header.scss";

const links = [
  {
    linkTo: "/",
    linkName: "Home",
  },
  {
    linkTo: "/auth",
    linkName: "Log in",
  },
];

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link className="header-title" to={"/"}>
          TODO-App
        </Link>
        <div className="nav">
          <ul className="nav-list">
            {links.map((link) => {
              return (
                <li className="nav-list__item">
                  <Link className="nav-list__link" to={link.linkTo}>
                    {link.linkName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button className="header-button">
        <DarkModeIcon />
      </button>
    </div>
  );
};
