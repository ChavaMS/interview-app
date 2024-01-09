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
      if (payload !== null) {
        state.activeInterviewer = state.interviewers.find(
          (interviewer) => interviewer.id === payload
        );
      } else {
        state.activeInterviewer = null;
      }
    },
    onSetActiveCandidate: (state, { payload }) => {
      if (payload !== null) {
        state.activeCandidate = state.candidates.find(
          (candidate) => candidate.id === payload
        );
      } else {
        state.activeCandidate = null;
      }
    },
    onAddNewInterviewer: (state, { payload }) => {
      state.interviewers.push(payload);
      state.activeInterviewer = null;
    },
    onAddNewCandidate: (state, { payload }) => {
      state.candidates.push({
        ...payload,
        interviewer: state.activeInterviewer.id,
      });
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
