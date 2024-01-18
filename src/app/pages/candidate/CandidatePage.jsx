import { useEffect } from "react";
import { useUiStore, useContentStore } from "../../../store";
import {
  CandidateSkills,
  CandidateInformation,
  CandidateEmptySkills,
  AddSkillsModal,
} from "../../components";
import "../../styles/candidate/candidatePage.css";

export const CandidatePage = () => {
  const { activeCandidate, loadSkills, getCandidateSkills } =
    useContentStore();
  const {
    showContinueButton,
    updateContinueButtonText,
    disableContinueButton,
    enableContinueButton,
    updateNextRoute,
    updateNavbarTitle,
  } = useUiStore();

  useEffect(() => {
    if (getCandidateSkills().length === 0) {
      disableContinueButton();
    } else {
      enableContinueButton();
    }

    showContinueButton();
    updateNavbarTitle("Candidate Information");
    updateContinueButtonText("Comenzar");
    updateNextRoute("/interview");
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
      <AddSkillsModal />
    </div>
  );
};
