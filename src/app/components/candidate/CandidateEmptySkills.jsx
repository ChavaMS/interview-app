import { useUiStore } from "../../../store";
import { CandidateCardLayout } from "../layout";
import "../../styles/candidate/candidateEmptySkills.css";

export const CandidateEmptySkills = () => {
  const { openSkillsModal } = useUiStore();

  const addSkill = () => {
    openSkillsModal();
  };

  return (
    <CandidateCardLayout>
      <div className="candidate-information-alignment">
        <div onClick={addSkill} className="text-center empty-skills-container">
          <h2>No se han encontrado skills</h2>
          <i className="fas fa-puzzle-piece skills-icon"></i>
          <h2>Haz click aqui para añadir</h2>
        </div>
      </div>
    </CandidateCardLayout>
  );
};
