import { useDispatch, useSelector } from "react-redux";
import {
  onShowAddInterviewerModal,
  onShowAddCandidateModal,
  onSetVisibilityBackButton,
  onEnableContinueButton,
  onShowAddSkillsModal,
  onShowQuestionsInformationModal,
  onUpdateNextRoute,
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
    openQuestionsInformationModal,
    closeQuestionsInformationModal,
    updateNextRoute
  };
};
