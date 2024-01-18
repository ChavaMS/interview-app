import { useUiStore } from "../../../store";
import { CandidateCardLayout } from "../layout";
import "../../styles/candidate/candidateSkills.css";

export const CandidateSkills = ({ skills = [] }) => {
  const { openSkillsModal } = useUiStore();

  const addSkill = () => {
    openSkillsModal();
  };

  return (
    <CandidateCardLayout>
      <div className="h-100">
        <h1>Skills a evaluar</h1>
        <ul className="candidate-information-list">
          {skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
        <div className="add-skill-button">
          <button onClick={addSkill} className="btn btn-primary">
            Agregar o editar las skills
          </button>
        </div>
      </div>
    </CandidateCardLayout>
  );
};
