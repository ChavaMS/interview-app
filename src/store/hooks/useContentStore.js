import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCandidate,
  onAddNewInterviewer,
  onAddCandidateSkills,
  onLoadSkills,
  onSetActiveCandidate,
  onSetActiveInterviewer,
  onAddNewInterview,
  onUpdateInterviewComments,
  onEditInterviewer,
  onDeleteActiveInterviewer,
  onDeleteActiveCandidate,
  onEditCandidate,
} from "../content/contentSlice";
import { skills, questions } from "../../app/data";

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

  const editInterviewer = (interviewer) => {
    dispatch(onEditInterviewer(interviewer));
    setActiveInterviewer(interviewer.id);
  };

  const setActiveInterviewer = (id) => {
    dispatch(onSetActiveInterviewer(id));
  };

  const removeActiveInterviewer = () => {
    dispatch(onSetActiveInterviewer(null));
  };

  const deleteActiveInterviewer = () => {
    dispatch(onDeleteActiveInterviewer());
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

  const deleteCandidate = () => {
    dispatch(onDeleteActiveCandidate());
  };

  const editCandidate = (candidate) => {
    dispatch(onEditCandidate(candidate));
    setActiveCandidate(candidate.id);
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
      (interview) => interview.candidate === activeCandidate.id
    );
    if (!hasInterviews) {
      dispatch(onAddNewInterview(interview));
    }
  };

  const getSelectedCandidateInterview = () => {
    return (
      interviews.find((interview) => interview.candidate === activeCandidate.id)
        ?.interview || []
    );
  };

  const getSelectedCandidateResults = () => {
    const interviewResults = getSelectedCandidateInterview();
    const interviewResultsReduced = interviewResults.reduce(
      (counter, question) => {
        const { isCorrect, skillId } = question;

        if (!counter[skillId]) {
          counter[skillId] = { totalIsCorrect: 0, questionCount: 0 };
        }

        if (isCorrect) {
          counter[skillId].totalIsCorrect++;
        }
        counter[skillId].questionCount++;

        return counter;
      },
      {}
    );

    const results = Object.entries(interviewResultsReduced).map(
      ([skillId, data]) => {
        const average = (data.totalIsCorrect / data.questionCount) * 100;

        return { skillId, average };
      }
    );
    return results;
  };

  const updateInterviewComments = (comment) => {
    dispatch(onUpdateInterviewComments(comment));
  };

  const loadCandidateQuestions = () => {
    const candidateSkills = getCandidateSkills();
    const interviewQuestions = questions.filter((question) => {
      return candidateSkills.some((skill) => skill.id === question.skillId);
    });
    return interviewQuestions.map((question) => {
      return {
        ...question,
        isCorrect: false,
        comments: "",
      };
    });
  };

  return {
    // INTERVIEWER
    interviewers,
    activeInterviewer,
    // CANDIDATE
    candidates,
    activeCandidate,
    // SKILLS
    skillsLoaded,
    // INTERVIEW
    interviews,

    // INTERVIEWER
    addNewInterviewer,
    editInterviewer,
    deleteActiveInterviewer,
    setActiveInterviewer,
    removeActiveInterviewer,
    getLastInterviewerId,
    // CANDIDATE
    addNewCandidate,
    deleteCandidate,
    editCandidate,
    setActiveCandidate,
    getLastCandidateId,
    addCandidateSkills,
    getCandidateSkills,
    // SKILLS
    loadSkills,
    // INTERVIEW
    addInterview,
    getSelectedCandidateInterview,
    loadCandidateQuestions,
    getSelectedCandidateResults,
    updateInterviewComments,
  };
};
