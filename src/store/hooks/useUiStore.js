import { useDispatch, useSelector } from "react-redux";
import {
  onShowAddInterviewerModal,
  onShowAddCandidateModal,
  onSetVisibilityBackButton,
  onEnableContinueButton,
  onShowAddSkillsModal,
} from "../index";

export const useUiStore = () => {
  const {
    showAddCandidateModal,
    showAddInterviewerModal,
    showAddSkillsModal,
    backButton,
    continueButton,
  } = useSelector((state) => state.ui);
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

  const openSkillsModal = () => {
    dispatch(onShowAddSkillsModal(true));
  };

  const closeSkillsModal = () => {
    dispatch(onShowAddSkillsModal(false));
  };

  const showBackButton = () => {
    dispatch(onSetVisibilityBackButton(true));
  };

  const hideBackButton = () => {
    dispatch(onSetVisibilityBackButton(false));
  };

  const enableContinueButton = () => {
    dispatch(onEnableContinueButton(true));
  };

  const disableContinueButton = () => {
    dispatch(onEnableContinueButton(false));
  };

  return {
    showAddCandidateModal,
    showAddInterviewerModal,
    showAddSkillsModal,
    backButton,
    continueButton,

    openInterviewersModal,
    closeInterviewersModal,
    openCandiateModal,
    closeCandidateModal,
    openSkillsModal,
    closeSkillsModal,
    showBackButton,
    hideBackButton,
    enableContinueButton,
    disableContinueButton,
  };
};
