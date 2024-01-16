import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../../store";
import "../../styles/ui/navigationButtons.css";

export const NavigationButtons = () => {
  const navigate = useNavigate();

  const { backButton, continueButton, nextRoute: route } = useUiStore();

  const nextRoute = () => {
    navigate(route);
  };

  const previousRoute = () => {
    navigate(-1);
  };
  return (
    <div className="navigation-container p-3">
      <button
        className={
          "btn navigation-button " + (backButton.visible ? "" : "d-none")
        }
        onClick={previousRoute}
      >
        Regresar
      </button>
      <button
        disabled={!continueButton.enable}
        className={
          "btn navigation-button ms-auto " + (continueButton.visible ? "" : "d-none")
        }
        onClick={nextRoute}
      >
        <span className="mx-3">{continueButton.text}</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
