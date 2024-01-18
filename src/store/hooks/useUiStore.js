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
  onUpdateNavbarTitle,
  onShowAddDeleteModal,
} from "../index";

export const useUiStore = () => {
  const {
    showAddCandidateModal,
    showAddInterviewerModal,
    showAddSkillsModal,
    showQuestionsInfoModal,
    showDeleteConfirmationModal,
    backButton,
    continueButton,
    nextRoute,
    navbarTitle,
  } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  // MODALS
  const openInterviewersModal = () => {
    dispatch(onShowAddInterviewerModal({ open: true, edit: false }));
  };

  const openEditInterviewersModal = () => {
    dispatch(onShowAddInterviewerModal({ open: true, edit: true }));
  };

  const closeInterviewersModal = () => {
    dispatch(onShowAddInterviewerModal({ open: false, edit: false }));
  };

  const openCandiateModal = () => {
    dispatch(onShowAddCandidateModal({ open: true, edit: false }));
  };

  const openEditCandidateModal = () => {
    dispatch(onShowAddCandidateModal({ open: true, edit: true }));
  }

  const closeCandidateModal = () => {
    dispatch(onShowAddCandidateModal({ open: false, edit: false }));
  };

  const openDeleteConfirmationModal = () => {
    dispatch(onShowAddDeleteModal(true));
  };

  const closeDeleteConfirmationModal = () => {
    dispatch(onShowAddDeleteModal(false));
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

  // LAYOUT
  const updateNavbarTitle = (title) => {
    dispatch(onUpdateNavbarTitle(title));
  };

  return {
    // MODALS
    showAddCandidateModal,
    showAddInterviewerModal,
    showAddSkillsModal,
    showQuestionsInfoModal,
    showDeleteConfirmationModal,
    // BUTTON
    backButton,
    continueButton,
    // ROUTE
    nextRoute,
    navbarTitle,

    // MODALS
    openInterviewersModal,
    openEditInterviewersModal,
    closeInterviewersModal,
    openCandiateModal,
    openEditCandidateModal,
    closeCandidateModal,
    openSkillsModal,
    closeSkillsModal,
    openQuestionsInformationModal,
    closeQuestionsInformationModal,
    openDeleteConfirmationModal,
    closeDeleteConfirmationModal,
    // BUTTONS
    showBackButton,
    hideBackButton,
    enableContinueButton,
    disableContinueButton,
    showContinueButton,
    hideContinueButton,
    updateContinueButtonText,
    // ROUTE
    updateNextRoute,
    updateNavbarTitle,
  };
};
