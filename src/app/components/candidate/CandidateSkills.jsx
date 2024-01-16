import { useUiStore } from "../../../store";
import { CandidateCardLayout } from "../layout";

export const CandidateSkills = ({ skills = [] }) => {
  const { openSkillsModal } =
    useUiStore();

  const addSkill = () => {
    openSkillsModal();
  };

  return (
    <CandidateCardLayout>
      <h1>Skills a evaluar</h1>
      <ul className="candidate-information-list">
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={addSkill} className="btn btn-primary">
          Add more skills
        </button>
      </div>
    </CandidateCardLayout>
  );
};
