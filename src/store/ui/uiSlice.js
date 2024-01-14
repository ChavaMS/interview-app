import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    continueButton: {
      enable: false,
      visible: true,
    },
    backButton: {
      enable: false,
      visible: false,
    },
    nextRoute: "",
    showAddCandidateModal: false,
    showAddInterviewerModal: false,
    showAddSkillsModal: false,
    showQuestionsInfoModal: false,
  },
  reducers: {
    onEnableContinueButton: (state, { payload }) => {
      state.continueButton.enable = payload;
    },
    onEnableBackButton: (state, { payload }) => {
      state.backButton.enable = payload;
    },
    onSetVisibilityBackButton: (state, { payload }) => {
      state.backButton.visible = payload;
    },
    onShowAddCandidateModal: (state, { payload }) => {
      state.showAddCandidateModal = payload;
    },
    onShowAddInterviewerModal: (state, { payload }) => {
      state.showAddInterviewerModal = payload;
    },
    onShowAddSkillsModal: (state, { payload }) => {
      state.showAddSkillsModal = payload;
    },
    onShowQuestionsInformationModal: (state, { payload }) => {
      state.showQuestionsInfoModal = payload;
    },
    onUpdateNextRoute: (state, { payload }) => {
      state.nextRoute = payload;
    },
  },
});

export const {
  onEnableContinueButton,
  onEnableBackButton,
  onSetVisibilityBackButton,
  onShowAddCandidateModal,
  onShowAddInterviewerModal,
  onShowAddSkillsModal,
  onShowQuestionsInformationModal,
  onUpdateNextRoute,
} = uiSlice.actions;
