import { useState } from "react";
import { useUiStore } from "../../../store";
import { useContentStore } from "../../../store/hooks/useContentStore";
import {
  CandidateInformation,
  QuestionsInformationModal,
  InterviewResults,
} from "../../components";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const { activeCandidate, updateInterviewComments } = useContentStore();
  const { openQuestionsInformationModal } = useUiStore();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const onCommentChanged = ({ target }) => {
    setComment(target.value);
  };

  const openQuestionsModal = () => {
    openQuestionsInformationModal();
  };

  const navigateToCandidatesPage = () => {
    updateInterviewComments(comment);
    navigate('/candidates');
  };

  return (
    <div className="container-fluid p-5">
      <h1>Resumen</h1>
      <div className="row">
        <div className="col-md-6 p-3">
          <h3>Datos del candidato</h3>
          <CandidateInformation candidate={activeCandidate} />
        </div>
        <div className="col-md-6 p-3">
          <div className="justify-content-center text-center d-flex w-100">
            <div className="d-flex w-75 justify-content-between">
              <h3 className="d-inline">Resultados</h3>
              <button className="btn btn-primary" onClick={openQuestionsModal}>
                Ver preguntas
              </button>
            </div>
          </div>
          <InterviewResults />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Comentarios:</h3>
          <textarea
            name="comment"
            value={comment}
            onChange={onCommentChanged}
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-end flex-column h-100">
            <button
              className="btn btn-danger mt-auto"
              onClick={navigateToCandidatesPage}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
      <QuestionsInformationModal />
    </div>
  );
};
