import { getCandidateType } from "../../helpers";
import { CandidateCardLayout } from "../layout";

export const CandidateInformation = ({ candidate }) => {
  return (
    <CandidateCardLayout>
      <div className="d-flex">
        <i className="fa-solid fa-user add-user-icon me-5"></i>
        <div>
          <h3 className="candidate-information-title">Nombre completo</h3>
          <h3>{candidate.name}</h3>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="candidate-information-title">Correo electrónico</h3>
        <h3>{candidate.email}</h3>
      </div>
      <div className="mt-4">
        <h3 className="candidate-information-title">Tipo</h3>
        <h3>{getCandidateType(candidate.type)}</h3>
      </div>
    </CandidateCardLayout>
  );
};
