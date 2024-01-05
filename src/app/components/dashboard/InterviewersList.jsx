import { useUiStore } from "../../../store";

export const InterviewersList = () => {
  const { openInterviewersModal } = useUiStore();

  const addInterviewer = () => {
    console.log('flag');
    openInterviewersModal();
  };

  return (
    <div className="interviewrs-list-container row row-cols-1 row-cols-md-5 g-4 my-4">
      <div className="text-center card border-0">
        <i className="fa-solid fa-user add-user-icon"></i>
        <h5 className="d-block mt-2">Salvador Medina</h5>
        <span className="d-block">#1234</span>
        <span className="d-block">salvador.medina</span>
      </div>
      <div
        className="text-center card border-0"
        role="button"
        onClick={addInterviewer}
      >
        <i className="fa-solid fa-user-plus add-user-icon"></i>
        <span className="d-block mt-3">
          Haz click aqui para añadir a otro entrevistador
        </span>
      </div>
    </div>
  );
};
