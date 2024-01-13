import { useEffect } from "react";
import { useContentStore } from "../../../store/hooks/useContentStore";
import {
  CandidateSkills,
  CandidateInformation,
  CandidateEmptySkills,
  AddSkillsModal,
} from "../../components";
import "../../styles/candidate/candidatePage.css";

export const CandidatePage = () => {
  const { activeCandidate, loadSkills, getCandidateSkills } = useContentStore();

  console.log("flag");
  useEffect(() => {
    loadSkills();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-6">
          <CandidateInformation candidate={activeCandidate} />
        </div>
        <div className="col-md-6">
          {getCandidateSkills().length > 0 ? (
            <CandidateSkills skills={getCandidateSkills()} />
          ) : (
            <CandidateEmptySkills />
          )}
        </div>
      </div>
      <AddSkillsModal/>
    </div>
  );
};
