import { useContentStore } from "../../../store/hooks/useContentStore";
import { getSkillName } from "../../helpers";

export const InterviewResults = () => {
  const { skillsLoaded, getSelectedCandidateResults } = useContentStore();

  return (
    <>
      <div className="justify-content-center text-center d-flex w-100">
        <div className="d-flex w-75 justify-content-between">
          <h4 className="d-inline">Skill</h4>
          <h4 className="d-inline">Puntaje</h4>
        </div>
      </div>
      {getSelectedCandidateResults().map((skill, index) => (
        <div
          key={index}
          className="justify-content-center text-center d-flex w-100"
        >
          <div className="d-flex w-75 justify-content-between">
            <h5 className="d-inline">
              {getSkillName(skill.skillId, skillsLoaded)}
            </h5>
            <h5 className="d-inline">{skill.average}</h5>
          </div>
        </div>
      ))}
    </>
  );
};
