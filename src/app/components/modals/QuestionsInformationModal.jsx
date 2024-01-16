import Modal from "react-modal";
import { useUiStore } from "../../../store";
import { useContentStore } from "../../../store/hooks/useContentStore";
import { getSkillName } from "../../helpers";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const QuestionsInformationModal = () => {
  const { showQuestionsInfoModal, closeQuestionsInformationModal } =
    useUiStore();
  const { skillsLoaded, getSelectedCandidateInterview } = useContentStore();

  const onCloseModal = () => {
    closeQuestionsInformationModal();
  };

  return (
    <Modal
      isOpen={showQuestionsInfoModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <div>
        <i className="fa-solid fa-question skills-icon"></i>
        <h1 className="d-inline ms-3">Preguntas</h1>
      </div>
      <hr />
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Pregunta</th>
            <th>Respuesta</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          {getSelectedCandidateInterview().map((interview, index) => (
            <tr key={index}>
              <td>{getSkillName(interview.skillId, skillsLoaded)}</td>
              <td>{interview.question}</td>
              <td>{interview.isCorrect ? "Correcta" : "Incorrecta"}</td>
              <td>{interview.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
};
