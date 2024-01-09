import { useUiStore } from "../../../store";
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
  const { openCandiateModal } = useUiStore();

  const addNewCandidate = () => {
    openCandiateModal();
  };

  return (
    <>
      <div className="container-fluid dashboard-container">
        <div className="mt-3">
          <h1 className="d-inline me-3">Candidatos</h1>
          <button className={"btn btn-primary " + (candidates.length > 0 ? '' : 'd-none')} onClick={addNewCandidate}>
            Nuevo candidato
          </button>
        </div>

        {candidates.length > 0 ? (
          <CandidatesTable />
        ) : (
          <EmptyDashboard section={UserType.candidate} />
        )}

        {<AddCandidateModal />}
      </div>
    </>
  );
};
