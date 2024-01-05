import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    interviewers: [],
    activeInterviewer: null,
    candidates: [],
    activeCandidate: null,
  },
  reducers: {
    onSetActiveInterviewer: (state, { payload }) => {
      state.activeInterviewer = payload;
    },
    onSetActiveCandidate: (state, { payload }) => {
      state.activeCandidate = payload;
    },
    onAddNewInterviewer: (state, { payload }) => {
      state.interviewers.push(payload);
      state.activeInterviewer = null;
    },
    onAddNewCandidate: (state, { payload }) => {
      state.candidates.push(payload);
      state.activeCandidate = null;
    },
  },
});

export const {
  onSetActiveInterviewer,
  onSetActiveCandidate,
  onAddNewCandidate,
  onAddNewInterviewer,
} = contentSlice.actions;
