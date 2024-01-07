import { useContentStore } from "../../../store/hooks/useContentStore";
import {
  EmptyDashboard,
  InterviewersList,
  AddInterviewerModal,
} from "../../components";
import { UserType } from "../../enums";
import "../../styles/dashboard/dashboardPage.css";

export const InterviewersDashboardPage = () => {
  const { interviewers } = useContentStore();

  return (
    <>
      <div className="container-fluid dashboard-container">
        <h1 className="mt-3">Entrevistadores</h1>

        {interviewers.length > 0 ? <InterviewersList /> : <EmptyDashboard section={UserType.interviewer}/>}

        <AddInterviewerModal />
      </div>
    </>
  );
};
