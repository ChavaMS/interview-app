import { useUiStore } from "../../../store";
import "../../styles/ui/navbar.css";

export const Navbar = () => {
  const { navbarTitle } = useUiStore();
  return (
    <nav className="navbar navbar-color">
      <div className="container-fluid">
        <a className="navbar-brand navbar-section-name" href="#">
          {navbarTitle}
        </a>
      </div>
    </nav>
  );
};
