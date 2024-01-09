import { useEffect } from "react";
import { useUiStore } from "../../../store";
import { useContentStore } from "../../../store/hooks/useContentStore";
import { InterviewerCard } from "./InterviewerCard";

export const InterviewersList = () => {
  const {
    openInterviewersModal,
    enableContinueButton,
    disableContinueButton,
    hideBackButton,
  } = useUiStore();
  const { interviewers, activeInterviewer } = useContentStore();

  useEffect(() => {
    hideBackButton();
  });

  useEffect(() => {
    if (activeInterviewer) {
      enableContinueButton();
    } else {
      disableContinueButton();
    }
  }, [activeInterviewer]);

  const addInterviewer = () => {
    openInterviewersModal();
  };

  return (
    <div className="interviewrs-list-container row row-cols-1 row-cols-md-5 g-4 my-4">
      {interviewers.map((interviewer) => (
        <InterviewerCard key={interviewer.id} {...interviewer} />
      ))}

      <div
        className="text-center card border-0 p-2"
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
