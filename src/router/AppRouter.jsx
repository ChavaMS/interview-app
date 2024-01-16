import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InterviewerRoutes, CandidateRoutes, InterviewRoutes } from "../app/routes";
import { InterviewerRouter, CandidateRouter, InterviewRouter } from "../app/router";

const routesConfig = createBrowserRouter([
  {
    path: "/",
    children: InterviewerRoutes,
    element: <InterviewerRouter />,
  },
  {
    path: "/candidates",
    children: CandidateRoutes,
    element: <CandidateRouter />,
  },
  {
    path: "/interview",
    children: InterviewRoutes,
    element: <InterviewRouter />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
