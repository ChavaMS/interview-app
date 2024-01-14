import { useUiStore } from "../../../store";
import { useContentStore } from "../../../store/hooks/useContentStore";
import {
  CandidateInformation,
  QuestionsInformationModal,
} from "../../components";

export const ResultsPage = () => {
  const { activeCandidate } = useContentStore();
  const { openQuestionsInformationModal } = useUiStore();

  const openQuestionsModal = () => {
    openQuestionsInformationModal();
  };

  return (
    <div className="container-fluid p-5">
      <h1>Resumen</h1>
      <div className="row">
        <div className="col md-6 p-3">
          <h3>Datos del candidato</h3>
          <CandidateInformation candidate={activeCandidate} />
        </div>
        <div className="col md-6 p-3">
          <div className="justify-content-center text-center d-flex w-100">
            <div className="d-flex w-75 justify-content-between">
              <h3 className="d-inline">Resultados</h3>
              <button className="btn btn-primary" onClick={openQuestionsModal}>
                Ver preguntas
              </button>
            </div>
          </div>
          <div className="justify-content-center text-center d-flex w-100">
            <div className="d-flex w-75 justify-content-between">
              <h4 className="d-inline">Skill</h4>
              <h4 className="d-inline">Puntaje</h4>
            </div>
          </div>
          <div className="justify-content-center text-center d-flex w-100">
            <div className="d-flex w-75 justify-content-between">
              <h5 className="d-inline">Javascript</h5>
              <h5 className="d-inline">P1</h5>
            </div>
          </div>
          <div className="justify-content-center text-center d-flex w-100">
            <div className="d-flex w-75 justify-content-between">
              <h5 className="d-inline">Javascript</h5>
              <h5 className="d-inline">P1</h5>
            </div>
          </div>
          <div className="justify-content-center text-center d-flex w-100">
            <div className="d-flex w-75 justify-content-between">
              <h5 className="d-inline">Javascript</h5>
              <h5 className="d-inline">P1</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50">
        <h3>Comentarios:</h3>
        <textarea name="comments" className="form-control" rows="5"></textarea>
      </div>
      <QuestionsInformationModal />
    </div>
  );
};
