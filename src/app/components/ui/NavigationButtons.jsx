import { useNavigate } from "react-router-dom";
import "../../styles/ui/navigationButtons.css";

export const NavigationButtons = () => {
  const navigate = useNavigate();

  const nextRoute = () => {
    navigate("/candidates");
  };

  const previousRoute = () => {
    navigate(-1);
  };
  return (
    <div className="navigation-container p-3">
      <button className="btn navigation-button" onClick={previousRoute}>
        Regresar
      </button>
      <button className="btn navigation-button" onClick={nextRoute}>
        <span className="mx-3">Continuar</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
