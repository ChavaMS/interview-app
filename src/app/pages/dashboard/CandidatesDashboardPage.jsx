import { useContentStore } from "../../../store/hooks/useContentStore";
import {
  AddCandidateModal,
  CandidatesTable,
  EmptyDashboard,
} from "../../components";
import { UserType } from "../../enums";
import "../../styles/dashboard/dashboardPage.css";

export const CandidatesDashboardPage = () => {
  const { candidates } = useContentStore();
  return (
    <>
      <div className="container-fluid dashboard-container">
        <h1 className="mt-3">Candidatos</h1>

        {candidates.length > 0 ? <CandidatesTable /> : <EmptyDashboard section={UserType.candidate} />}

        {<AddCandidateModal />}
      </div>
    </>
  );
};
