import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../../store";
import "../../styles/ui/navigationButtons.css";

export const NavigationButtons = () => {
  const navigate = useNavigate();

  const { backButton, continueButton } = useUiStore();

  const nextRoute = () => {
    navigate("/candidates");
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
      <button disabled={!continueButton.enable} className={"btn navigation-button " + (backButton.visible ? "" : "ms-auto")} onClick={nextRoute}>
        <span className="mx-3">Continuar</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
