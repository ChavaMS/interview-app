import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCandidate,
  onAddNewInterviewer,
  onSetActiveCandidate,
  onSetActiveInterviewer,
} from "../content/contentSlice";

export const useContentStore = () => {
  const { interviewers, activeInterviewer, candidates } = useSelector(
    (state) => state.content
  );
  const dispatch = useDispatch();

  const addNewInterviewer = (interviewer) => {
    dispatch(onAddNewInterviewer(interviewer));
  };

  const setActiveInterviewer = (id) => {
    dispatch(onSetActiveInterviewer(id));
  };

  const removeActiveInterviewer = () => {
    dispatch(onSetActiveInterviewer(null));
  };

  const addNewCandidate = (candidate) => {
    dispatch(onAddNewCandidate({ ...candidate, id: getLastCandidateId() }));
  };

  const setActiveCandidate = (candidateId) => {
    dispatch(onSetActiveCandidate(candidateId));
  };

  const getLastInterviewerId = () => {
    return interviewers.length > 0
      ? interviewers[interviewers.length - 1].id + 1
      : 0;
  };

  const getLastCandidateId = () => {
    return candidates.length > 0 ? candidates[candidates.length - 1].id + 1 : 0;
  };

  return {
    interviewers,
    candidates,
    activeInterviewer,

    addNewInterviewer,
    setActiveInterviewer,
    removeActiveInterviewer,
    addNewCandidate,
    setActiveCandidate,
    getLastInterviewerId,
    getLastCandidateId,
  };
};
