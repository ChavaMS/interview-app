import { useEffect } from "react";
import { useUiStore } from "../../../store";
import { UserType } from "../../enums";
import "../../styles/dashboard/emptyDashboard.css";

export const EmptyDashboard = ({ section }) => {
  const {
    openInterviewersModal,
    openCandiateModal,
    hideBackButton,
    showBackButton,
  } = useUiStore();

  useEffect(() => {
    if (section === UserType.interviewer) {
      hideBackButton();
    } else {
      showBackButton();
    }

  }, [section]);

  const addPerson = () => {
    if (section === UserType.interviewer) {
      openInterviewersModal();
    } else {
      openCandiateModal();
    }
  };

  return (
    <>
      <div className="empty-dashboard-content">
        <div className="text-center">
          <h2>No se ha registrado ningún {section}</h2>
          <button className="btn" onClick={addPerson}>
            <i className="fa-solid fa-user-plus add-user-icon"></i>
          </button>
          <h3>Haz click aqui para añadir</h3>
        </div>
      </div>
    </>
  );
};
