import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    interviewers: [],
    activeInterviewer: null,
    candidates: [],
    activeCandidate: {
      id: "",
      name: "",
      type: "",
      email: "",
    },
    candidatesSkills: [],
    skills: [],
    interviews: [],
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
    onDeleteActiveCandidate: (state) => {
      state.candidates = state.candidates.filter((candidate) => {
        candidate.id !== state.activeCandidate.id;
      });
      state.activeCandidate = null;
    },
    onEditCandidate: (state, { payload }) => {
      state.candidates = state.candidates.map((candidate) => {
        if (candidate.id === state.activeCandidate.id) {
          return {
            ...payload,
          };
        } else {
          return { ...candidate };
        }
      });
    },
    onAddNewInterviewer: (state, { payload }) => {
      state.interviewers.push(payload);
      state.activeInterviewer = null;
    },
    onEditInterviewer: (state, { payload }) => {
      state.interviewers = state.interviewers.map((interviewer) => {
        if (interviewer.id === state.activeInterviewer.id) {
          return {
            ...payload,
          };
        } else {
          return { ...interviewer };
        }
      });
    },
    onDeleteActiveInterviewer: (state) => {
      state.interviewers = state.interviewers.filter(
        (interviewer) => interviewer.id !== state.activeInterviewer.id
      );
      state.activeInterviewer = null;
    },
    onAddNewCandidate: (state, { payload }) => {
      state.candidates.push({
        ...payload,
        interviewer: state.activeInterviewer.id,
      });
      state.activeCandidate = null;
    },
    onLoadSkills: (state, { payload }) => {
      state.skills = payload;
    },
    onAddCandidateSkills: (state, { payload }) => {
      state.candidatesSkills = state.candidatesSkills.filter(
        (candidateSkills) =>
          candidateSkills.candidateId !== state.activeCandidate.id
      );
      state.candidatesSkills.push(payload);
    },
    onAddNewInterview: (state, { payload }) => {
      state.interviews.push({
        interview: payload,
        candidate: state.activeCandidate.id,
        comments: "",
      });
    },
    onUpdateInterviewComments: (state, { payload }) => {
      state.interviews = state.interviews.map((interview) => {
        if (interview.candidate === state.activeCandidate.id) {
          return {
            ...interview,
            comments: payload,
          };
        }
        return {
          ...interview,
        };
      });
    },
    onLoadCandidateQuestions: (state, { payload }) => {
      state.candidateQuestions = payload;
    },
  },
});

export const {
  // INTERVIEWER
  onSetActiveInterviewer,
  onAddNewInterviewer,
  onDeleteActiveInterviewer,
  onEditInterviewer,
  // CANDIDATE
  onSetActiveCandidate,
  onAddNewCandidate,
  onDeleteActiveCandidate,
  onEditCandidate,
  // SKILLS
  onLoadSkills,
  onAddCandidateSkills,
  // INTERVIEW
  onAddNewInterview,
  onLoadCandidateQuestions,
  onUpdateInterviewComments,
} = contentSlice.actions;
