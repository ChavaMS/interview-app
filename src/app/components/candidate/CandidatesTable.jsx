import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContentStore } from "../../../store/hooks/useContentStore";
import { getCandidateType } from "../../helpers";
import { useUiStore } from "../../../store";
import "../../styles/candidate/candidateTable.css";

export const CandidatesTable = () => {
  const { candidates, setActiveCandidate, activeCandidate } = useContentStore();
  const { enableContinueButton, disableContinueButton, updateNextRoute } = useUiStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeCandidate) {
      updateNextRoute("/candidates/interview");
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
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Tipo de candidato</th>
          <th scope="col">Información del candidato</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr
            className="table-row-pointer"
            key={candidate.id}
          >
            <th>
              <input type="checkbox" checked={candidate.id === activeCandidate?.id} onChange={() => selectCandidate(candidate.id)} />
            </th>
            <th
              className={
                activeCandidate?.id === candidate.id ? "row-selected" : ""
              }
            >
              {candidate.id}
            </th>
            <td
              className={
                activeCandidate?.id === candidate.id ? "row-selected" : ""
              }
            >
              {candidate.name}
            </td>
            <td
              className={
                activeCandidate?.id === candidate.id ? "row-selected" : ""
              }
            >
              {candidate.email}
            </td>
            <td
              className={
                activeCandidate?.id === candidate.id ? "row-selected" : ""
              }
            >
              {getCandidateType(candidate.type)}
            </td>
            <td
              className={
                activeCandidate?.id === candidate.id ? "row-selected" : ""
              }
            >
              <button
                className="btn btn-primary"
                onClick={() => openCandidateInfo(candidate.id)}
              >
                Ver mas Información
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
