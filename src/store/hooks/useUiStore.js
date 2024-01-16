import { useDispatch, useSelector } from "react-redux";
import {
  onShowAddInterviewerModal,
  onShowAddCandidateModal,
  onSetVisibilityBackButton,
  onEnableContinueButton,
  onShowAddSkillsModal,
  onShowQuestionsInformationModal,
  onUpdateNextRoute,
  onSetVisibilityContinueButton,
  onSetTextContinueButton,
} from "../index";

export const useUiStore = () => {
  const {
    showAddCandidateModal,
    showAddInterviewerModal,
    showAddSkillsModal,
    showQuestionsInfoModal,
    backButton,
    continueButton,
    nextRoute,
  } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  // MODALS
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

  const openQuestionsInformationModal = () => {
    dispatch(onShowQuestionsInformationModal(true));
  };

  const closeQuestionsInformationModal = () => {
    dispatch(onShowQuestionsInformationModal(false));
  };

  // BUTTONS
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

  const showContinueButton = () => {
    dispatch(onSetVisibilityContinueButton(true));
  };

  const hideContinueButton = () => {
    dispatch(onSetVisibilityContinueButton(false));
  };

  const updateContinueButtonText = (text) => {
    dispatch(onSetTextContinueButton(text));
  };

  // ROUTES
  const updateNextRoute = (nextRoute) => {
    dispatch(onUpdateNextRoute(nextRoute));
  };

  return {
    showAddCandidateModal,
    showAddInterviewerModal,
    showAddSkillsModal,
    showQuestionsInfoModal,
    backButton,
    continueButton,
    nextRoute,

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
    showContinueButton,
    hideContinueButton,
    updateContinueButtonText,
    openQuestionsInformationModal,
    closeQuestionsInformationModal,
    updateNextRoute,
  };
};
