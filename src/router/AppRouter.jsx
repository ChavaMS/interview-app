import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InterviewerRoutes, CandidateRoutes } from "../app/routes";
import {
  InterviewerRouter,
  CandidateRouter,
} from "../app/router";

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
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
