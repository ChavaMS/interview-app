import { useUiStore, useContentStore } from "../../../store";
import { InterviewerActions } from "./InterviewerActions";
import "../../styles/dashboard/interviewerCard.css";

export const InterviewerCard = ({ name, id, eid }) => {
  const { activeInterviewer, setActiveInterviewer, removeActiveInterviewer } =
    useContentStore();
  const { enableContinueButton, updateNextRoute } = useUiStore();

  const selectCard = () => {
    if (activeInterviewer && activeInterviewer.id === id) {
      removeActiveInterviewer();
    } else {
      updateNextRoute("/candidates");
      setActiveInterviewer(id);
      enableContinueButton();
    }
  };

  return (
    <>
      <div
        className={
          "shadow text-center card interviewer-card " +
          (activeInterviewer && activeInterviewer.id === id
            ? "interviewer-card-selected"
            : "")
        }
      >
        <div onClick={selectCard}>
          <i className="fa-solid fa-user add-user-icon"></i>
          <h5 className="d-block mt-2">{name}</h5>
          <span className="d-block">{id}</span>
          <span className="d-block">{eid}</span>
        </div>
        {activeInterviewer?.id === id ? (
          <InterviewerActions intervewerId={id} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
