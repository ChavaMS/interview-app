import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContentStore } from "../../../store/hooks/useContentStore";

export const InterviewFinalComments = () => {
  const {
    interviews,
    activeCandidate,
    updateInterviewComments,
    getSelectedCandidateInterview,
  } = useContentStore();

  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (getSelectedCandidateInterview().length > 0) {
      let comments = interviews.find(
        (interview) => interview.candidate === activeCandidate.id
      ).comments;

      setComment(comments);
    }
  }, []);

  const onCommentChanged = ({ target }) => {
    setComment(target.value);
  };

  const navigateToCandidatesPage = () => {
    updateInterviewComments(comment);
    navigate("/candidates");
  };

  return (
    <div className="row mt-5">
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
  );
};
