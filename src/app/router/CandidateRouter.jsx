import { Outlet, useNavigate } from "react-router-dom";
import { RouterLayout } from "../components/layout";
import { useContentStore } from "../../store/hooks/useContentStore";
import { useEffect } from "react";

export const CandidateRouter = () => {
  const { activeInterviewer } = useContentStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeInterviewer) navigate("/");
  }, []);

  return (
    <RouterLayout>
      <Outlet />
    </RouterLayout>
  );
};
