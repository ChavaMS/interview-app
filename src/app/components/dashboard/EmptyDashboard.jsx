import { useUiStore } from "../../../store";
import "../../styles/dashboard/emptyDashboard.css";

export const EmptyDashboard = () => {
  const { openInterviewersModal } = useUiStore();

  const addInterviewer = () => {
    openInterviewersModal();
  };
  return (
    <>
      <div className="empty-dashboard-content">
        <div className="text-center">
          <h2>No se ha registrado ningún entrevistador</h2>
          <button className="btn" onClick={addInterviewer}>
            <i className="fa-solid fa-user-plus add-user-icon"></i>
          </button>
          <h3>Haz click aqui para añadir</h3>
        </div>
      </div>
    </>
  );
};
