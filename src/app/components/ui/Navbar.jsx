import { useUiStore } from "../../../store";
import "../../styles/ui/navbar.css";

export const Navbar = () => {
  const { navbarTitle } = useUiStore();
  return (
    <nav className="navbar navbar-color">
      <div className="container-fluid">
        <span className="navbar-brand navbar-section-name">
          {navbarTitle}
        </span>
      </div>
    </nav>
  );
};
