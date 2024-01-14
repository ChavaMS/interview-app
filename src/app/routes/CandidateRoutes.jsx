import { CandidatePage, CandidatesDashboardPage, QuestionsPage, ResultsPage } from "../pages";

export const CandidateRoutes = [
  { path: "", element: <CandidatesDashboardPage /> },
  { path: "information", element: <CandidatePage /> },
  { path: "interview", element: <QuestionsPage /> },
  { path: "results", element: <ResultsPage /> },
];
