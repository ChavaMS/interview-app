import { CandidatesDashboardPage, InterviewersDashboardPage } from "../pages";

export const AppRoutes = [
  { path: "/", element: <InterviewersDashboardPage /> },
  { path: "/candidates", element: <CandidatesDashboardPage /> },
];