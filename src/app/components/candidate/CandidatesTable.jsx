import { useNavigate } from "react-router-dom";
import { useContentStore } from "../../../store/hooks/useContentStore";
import { getCandidateType } from "../../helpers";

export const CandidatesTable = () => {
  const { candidates, setActiveCandidate } = useContentStore();
  const navigate = useNavigate();

  const openCandidateInfo = (candidateId) => {
    setActiveCandidate(candidateId);
    navigate("/candidates/information");
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
          <tr key={candidate.id}>
            <th>{candidate.id}</th>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td>{getCandidateType(candidate.type)}</td>
            <td>
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
