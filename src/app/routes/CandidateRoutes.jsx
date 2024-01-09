import { CandidatePage, CandidatesDashboardPage } from "../pages";

export const CandidateRoutes = [
  { path: "", element: <CandidatesDashboardPage /> },
  { path: "information", element: <CandidatePage /> },
];
