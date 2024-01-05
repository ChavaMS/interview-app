import { useDispatch, useSelector } from "react-redux";
import { onShowAddInterviewerModal, onShowAddCandidateModal } from "../index";

export const useUiStore = () => {
  const { showAddCandidateModal, showAddInterviewerModal } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  const openInterviewersModal = () => {
    dispatch(onShowAddInterviewerModal(true));
  };

  const closeInterviewersModal = () => {
    dispatch(onShowAddInterviewerModal(false));
  };

  const openCandiateModal = () => {
    dispatch(onShowAddCandidateModal(true));
  };

  const closeCandidateModal = () => {
    dispatch(onShowAddCandidateModal(false));
  };

  return {
    showAddCandidateModal,
    showAddInterviewerModal,

    openInterviewersModal,
    closeInterviewersModal,
    openCandiateModal,
    closeCandidateModal,
  };
};
