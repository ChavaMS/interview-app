import { CandidatePage, CandidatesDashboardPage, QuestionsPage } from "../pages";

export const CandidateRoutes = [
  { path: "", element: <CandidatesDashboardPage /> },
  { path: "information", element: <CandidatePage /> },
  { path: "interview", element: <QuestionsPage /> },
];
