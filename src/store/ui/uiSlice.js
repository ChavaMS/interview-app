import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    continueButton: {
      enable: false,
      visible: true,
      text: "Continuar",
    },
    backButton: {
      enable: false,
      visible: false,
    },
    nextRoute: "",
    navbarTitle: "",
    showAddCandidateModal: {
      open: false,
      edit: false,
    },
    showAddInterviewerModal: {
      open: false,
      edit: false,
    },
    showDeleteConfirmationModal: false,
    showAddSkillsModal: false,
    showQuestionsInfoModal: false,
  },
  reducers: {
    onEnableContinueButton: (state, { payload }) => {
      state.continueButton.enable = payload;
    },
    onSetVisibilityContinueButton: (state, { payload }) => {
      state.continueButton.visible = payload;
    },
    onSetTextContinueButton: (state, { payload }) => {
      state.continueButton.text = payload;
    },
    onEnableBackButton: (state, { payload }) => {
      state.backButton.enable = payload;
    },
    onSetVisibilityBackButton: (state, { payload }) => {
      state.backButton.visible = payload;
    },
    onShowAddCandidateModal: (state, { payload }) => {
      state.showAddCandidateModal.open = payload.open;
      state.showAddCandidateModal.edit = payload.edit;
    },
    onShowAddInterviewerModal: (state, { payload }) => {
      state.showAddInterviewerModal.open = payload.open;
      state.showAddInterviewerModal.edit = payload.edit;
    },
    onShowAddSkillsModal: (state, { payload }) => {
      state.showAddSkillsModal = payload;
    },
    onShowQuestionsInformationModal: (state, { payload }) => {
      state.showQuestionsInfoModal = payload;
    },
    onShowAddDeleteModal: (state, { payload }) => {
      state.showDeleteConfirmationModal = payload;
    },
    onUpdateNextRoute: (state, { payload }) => {
      state.nextRoute = payload;
    },
    onUpdateNavbarTitle: (state, { payload }) => {
      state.navbarTitle = payload;
    },
  },
});

export const {
  // MODALS
  onShowAddCandidateModal,
  onShowAddInterviewerModal,
  onShowAddSkillsModal,
  onShowQuestionsInformationModal,
  onShowAddDeleteModal,
  // BUTTONS
  onEnableContinueButton,
  onSetVisibilityContinueButton,
  onSetTextContinueButton,
  onEnableBackButton,
  onSetVisibilityBackButton,
  // ROUTES
  onUpdateNextRoute,
  onUpdateNavbarTitle,
} = uiSlice.actions;
