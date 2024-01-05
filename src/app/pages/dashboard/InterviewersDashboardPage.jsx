import {
  EmptyDashboard,
  InterviewersList,
  AddInterviewerModal,
} from "../../components";
import "../../styles/dashboard/dashboardPage.css";

export const InterviewersDashboardPage = () => {
  return (
    <>
      <div className="container-fluid dashboard-container">
        <h1 className="mt-3">Entrevistadores</h1>

        {
          // <EmptyDashboard/>
        }

        {<InterviewersList />}

        <AddInterviewerModal />
      </div>
    </>
  );
};
