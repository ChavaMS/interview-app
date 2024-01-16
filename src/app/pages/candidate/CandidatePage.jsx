import { useEffect } from "react";
import { useContentStore } from "../../../store/hooks/useContentStore";
import {
  CandidateSkills,
  CandidateInformation,
  CandidateEmptySkills,
  AddSkillsModal,
} from "../../components";
import "../../styles/candidate/candidatePage.css";
import { useUiStore } from "../../../store";

export const CandidatePage = () => {
  const { activeCandidate, candidatesSkills, loadSkills, getCandidateSkills } =
    useContentStore();
  const {
    showContinueButton,
    updateContinueButtonText,
    enableContinueButton,
    disableContinueButton,
    updateNextRoute,
  } = useUiStore();

  useEffect(() => {
    if (getCandidateSkills().length === 0) {
      disableContinueButton();
    } else {
      enableContinueButton();
    }

    showContinueButton();
    updateContinueButtonText("Comenzar");
    updateNextRoute("/interview");
    loadSkills();
  }, [candidatesSkills]);

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
