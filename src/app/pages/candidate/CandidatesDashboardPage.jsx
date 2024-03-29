import { useEffect } from "react";
import { useUiStore, useContentStore} from "../../../store";
import {
  AddCandidateModal,
  CandidatesTable,
  EmptyDashboard,
} from "../../components";
import { UserType } from "../../enums";
import "../../styles/dashboard/dashboardPage.css";

export const CandidatesDashboardPage = () => {
  const { candidates } = useContentStore();
  const {
    openCandiateModal,
    hideContinueButton,
    showBackButton,
    updateNavbarTitle,
  } = useUiStore();

  useEffect(() => {
    showBackButton();
    hideContinueButton();
    updateNavbarTitle("Dashboard");
  }, []);

  const addNewCandidate = () => {
    openCandiateModal();
  };

  return (
    <>
      <div className="container-fluid dashboard-container">
        <div className="mt-3 candidates-dashboard-button">
          <h1 className="d-inline me-3">Candidatos</h1>
          <button
            className={
              "btn btn-primary h-100 " +
              (candidates.length > 0 ? "" : "d-none")
            }
            onClick={addNewCandidate}
          >
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
