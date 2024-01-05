import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "../app/routes";
import { AppLayout } from "../app/layout/AppLayout";

const routesConfig = createBrowserRouter([
  {
    path: "/",
    children: AppRoutes,
    element: <AppLayout />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
