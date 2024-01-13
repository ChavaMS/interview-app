import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCandidate,
  onAddNewInterviewer,
  onAddCandidateSkills,
  onLoadSkills,
  onSetActiveCandidate,
  onSetActiveInterviewer,
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
  };
};
