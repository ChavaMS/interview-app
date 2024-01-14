import { useUiStore } from "../../../store";
import { useContentStore } from "../../../store/hooks/useContentStore";
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
    <div
      onClick={selectCard}
      className={
        "shadow text-center card interviewer-card " +
        (activeInterviewer && activeInterviewer.id === id
          ? "interviewer-card-selected"
          : "")
      }
    >
      <i className="fa-solid fa-user add-user-icon"></i>
      <h5 className="d-block mt-2">{name}</h5>
      <span className="d-block">{id}</span>
      <span className="d-block">{eid}</span>
    </div>
  );
};
