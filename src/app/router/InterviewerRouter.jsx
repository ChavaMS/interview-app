import { Outlet } from "react-router-dom";
import { RouterLayout } from "../components/layout";

export const InterviewerRouter = () => {
  return (
    <RouterLayout>
      <Outlet />
    </RouterLayout>
  );
};
