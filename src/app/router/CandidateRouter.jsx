import { Outlet } from "react-router-dom";
import { RouterLayout } from "../components/layout";

export const CandidateRouter = () => {
  return (
    <RouterLayout>
      <Outlet />
    </RouterLayout>
  );
};
