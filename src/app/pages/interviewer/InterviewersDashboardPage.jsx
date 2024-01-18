import { useEffect } from "react";
import { useUiStore, useContentStore } from "../../../store";
import {
  EmptyDashboard,
  InterviewersList,
  AddInterviewerModal,
} from "../../components";
import { UserType } from "../../enums";
import "../../styles/dashboard/dashboardPage.css";

export const InterviewersDashboardPage = () => {
  const { interviewers } = useContentStore();
  const {
    updateContinueButtonText,
    showContinueButton,
    updateNextRoute,
    updateNavbarTitle,
  } = useUiStore();

  useEffect(() => {
    showContinueButton();
    updateNavbarTitle("Dashboard");
    updateContinueButtonText("Continuar");
    updateNextRoute("/candidates");
  }, []);

  return (
    <>
      <div className="container-fluid dashboard-container">
        <h1 className="mt-3">Entrevistadores</h1>

        {interviewers.length > 0 ? (
          <InterviewersList />
        ) : (
          <EmptyDashboard section={UserType.interviewer} />
        )}

        <AddInterviewerModal />
      </div>
    </>
  );
};
