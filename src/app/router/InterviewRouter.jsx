import { Outlet, useNavigate } from "react-router-dom";
import { RouterLayout } from "../components/layout";
import { useContentStore } from "../../store/hooks/useContentStore";
import { useEffect } from "react";

export const InterviewRouter = () => {
  const { activeInterviewer, activeCandidate } = useContentStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeInterviewer || !activeCandidate) navigate("/");
  }, [activeInterviewer, activeCandidate]);

  return (
    <RouterLayout enableNavigationButtons={false}>
      <Outlet />
    </RouterLayout>
  );
};
