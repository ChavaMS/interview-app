import { AddCandidateModal, InterviewersList } from "../../components";
import "../../styles/dashboard/dashboardPage.css";

export const CandidatesDashboardPage = () => {
  return (
    <>
      <div className="container-fluid dashboard-container">
        <h1 className="mt-3">Candidatos</h1>

        {
          // <EmptyDashboard/>
        }

        {<InterviewersList />}

        {<AddCandidateModal />}
      </div>
    </>
  );
};
