import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCandidateType } from "../../helpers";
import { useUiStore, useContentStore } from "../../../store";
import { CandidateActions } from "./CandidateActions";
import "../../styles/candidate/candidateTable.css";

export const CandidatesTable = () => {
  const { candidates, setActiveCandidate, activeCandidate } = useContentStore();
  const { enableContinueButton, disableContinueButton } = useUiStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeCandidate) {
      enableContinueButton();
    } else {
      disableContinueButton();
    }
  }, [activeCandidate]);

  const openCandidateInfo = (candidateId) => {
    setActiveCandidate(candidateId);
    navigate("/candidates/information");
  };

  const selectCandidate = (candidateId) => {
    if (candidateId === activeCandidate?.id) {
      setActiveCandidate(null);
    } else {
      setActiveCandidate(candidateId);
    }
  };

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th></th>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Tipo de candidato</th>
          <th scope="col">Información del candidato</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id}>
            <th className="table-data-align">
              <input
                type="checkbox"
                checked={candidate.id === activeCandidate?.id}
                onChange={() => selectCandidate(candidate.id)}
              />
            </th>
            <th
              className={
                "table-data-align " +
                (activeCandidate?.id === candidate.id ? "row-selected" : "")
              }
            >
              <span>{candidate.id}</span>
            </th>
            <td
              className={
                "table-data-align " +
                (activeCandidate?.id === candidate.id ? "row-selected" : "")
              }
            >
              <span>{candidate.name}</span>
            </td>
            <td
              className={
                "table-data-align " +
                (activeCandidate?.id === candidate.id ? "row-selected" : "")
              }
            >
              <span>{candidate.email}</span>
            </td>
            <td
              className={
                "table-data-align " +
                (activeCandidate?.id === candidate.id ? "row-selected" : "")
              }
            >
              <span>{getCandidateType(candidate.type)}</span>
            </td>
            <td
              className={
                "table-data-align " +
                (activeCandidate?.id === candidate.id ? "row-selected" : "")
              }
            >
              <button
                className="btn btn-primary me-1"
                onClick={() => openCandidateInfo(candidate.id)}
              >
                <span>Ver mas Información</span>
              </button>
              {activeCandidate?.id === candidate.id ? (
                <div className="d-inline">
                  <CandidateActions />
                </div>
              ) : (
                <></>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
