import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCandidate,
  onAddNewInterviewer,
  onAddCandidateSkills,
  onLoadSkills,
  onSetActiveCandidate,
  onSetActiveInterviewer,
  onAddNewInterview,
} from "../content/contentSlice";
import { skills } from "../../app/data";

export const useContentStore = () => {
  const {
    interviewers,
    activeInterviewer,
    candidates,
    activeCandidate,
    skills: skillsLoaded,
    candidatesSkills,
    interviews,
  } = useSelector((state) => state.content);
  const dispatch = useDispatch();

  // INTERVIEWER
  const addNewInterviewer = (interviewer) => {
    dispatch(onAddNewInterviewer(interviewer));
  };

  const setActiveInterviewer = (id) => {
    dispatch(onSetActiveInterviewer(id));
  };

  const removeActiveInterviewer = () => {
    dispatch(onSetActiveInterviewer(null));
  };

  const getLastInterviewerId = () => {
    return interviewers.length > 0
      ? interviewers[interviewers.length - 1].id + 1
      : 0;
  };

  // CANDIDATE
  const addNewCandidate = (candidate) => {
    dispatch(onAddNewCandidate({ ...candidate, id: getLastCandidateId() }));
  };

  const setActiveCandidate = (candidateId) => {
    dispatch(onSetActiveCandidate(candidateId));
  };

  const getLastCandidateId = () => {
    return candidates.length > 0 ? candidates[candidates.length - 1].id + 1 : 0;
  };

  // SKILLS
  const loadSkills = () => {
    const skillsMapped = skills.map((skill) => ({
      ...skill,
      isChecked: false,
    }));
    dispatch(onLoadSkills(skillsMapped));
  };

  const addCandidateSkills = (skills) => {
    dispatch(onAddCandidateSkills(skills));
  };

  const getCandidateSkills = () => {
    let candidateSkills = candidatesSkills.find(
      (candidateSkills) => candidateSkills.candidateId === activeCandidate.id
    );

    return candidateSkills ? candidateSkills.skills : [];
  };

  // INTERVIEW
  const addInterview = (interview) => {
    const hasInterviews = interviews.some(
      (interview) => interview.candidate.id === activeCandidate.id
    );
    if (!hasInterviews) {
      dispatch(onAddNewInterview(interview));
    }
  };

  const getSelectedCandidateInterview = () => {
    return interviews.find(
      (interview) => interview.candidate === activeCandidate.id
    ).interview;
  };

  return {
    interviewers,
    candidates,
    activeInterviewer,
    activeCandidate,
    skillsLoaded,

    addNewInterviewer,
    setActiveInterviewer,
    removeActiveInterviewer,
    addNewCandidate,
    setActiveCandidate,
    loadSkills,
    addCandidateSkills,
    getCandidateSkills,
    getLastInterviewerId,
    getLastCandidateId,
    addInterview,
    getSelectedCandidateInterview,
  };
};
