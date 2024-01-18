import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useUiStore, useContentStore } from "../../../store";
import { checkSkillsSelected } from "../../helpers";
import "../../styles/modals/modal.css";

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

export const AddSkillsModal = () => {
  const {
    showAddSkillsModal,
    closeSkillsModal,
    enableContinueButton,
    disableContinueButton,
  } = useUiStore();
  const {
    skillsLoaded: skills = [],
    activeCandidate,
    addCandidateSkills,
    getCandidateSkills,
  } = useContentStore();

  const [skillsState, setSkillsState] = useState(skills);

  useEffect(() => {
    // Loads the candidate skills, if they were previously selected
    let candidateSkills = getCandidateSkills();
    let skillsForm = skills.map((skill) => ({ ...skill, isChecked: false }));
    skillsForm.forEach((skill, index) => {
      let candidateSkill = candidateSkills.find((cs) => cs.name === skill.name);
      if (candidateSkill) {
        skillsForm[index].isChecked = true;
      }
    });
    setSkillsState(skillsForm);
  }, [skills]);

  const handleOnChange = (position) => {
    const updatedSkillsState = skillsState.map((skill, index) =>
      index === position ? { ...skill, isChecked: !skill.isChecked } : skill
    );

    setSkillsState(updatedSkillsState);
  };

  const onCloseModal = () => {
    closeSkillsModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Verify that we have selected at least one skill to enable the continue button
    if (checkSkillsSelected(skillsState)) {
      enableContinueButton();
    } else {
      disableContinueButton();
    }

    let candidateSkills = {
      candidateId: activeCandidate.id,
      skills: skillsState.filter((skill) => skill.isChecked),
    };
    addCandidateSkills(candidateSkills);
    onCloseModal();
  };

  return (
    <Modal
      isOpen={showAddSkillsModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <div>
        <i className="fas fa-puzzle-piece modal-icon"></i>
        <h1 className="d-inline ms-3">Skills a evaluar </h1>
      </div>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="checkbox-container">
            {skills.map((skill, index) => (
              <div className="form-check checkbox-item" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={skill.name}
                  value={skill.name}
                  checked={skillsState[index]?.isChecked}
                  onChange={() => handleOnChange(index)}
                  id="flexCheckDefault"
                />
                <label className="form-check-label">{skill.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-secondary" onClick={onCloseModal}>
            Cancelar
          </button>
          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </Modal>
  );
};
