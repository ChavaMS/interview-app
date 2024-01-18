import { useEffect } from "react";
import { useUiStore, useContentStore } from "../../../store";
import {
  CandidateInformation,
  QuestionsInformationModal,
  InterviewResults,
  InterviewFinalComments,
} from "../../components";

export const ResultsPage = () => {
  const { activeCandidate } = useContentStore();
  const { openQuestionsInformationModal, updateNavbarTitle } = useUiStore();

  useEffect(() => {
    updateNavbarTitle("Results");
  }, []);

  const openQuestionsModal = () => {
    openQuestionsInformationModal();
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
      <InterviewFinalComments />

      <QuestionsInformationModal />
    </div>
  );
};
