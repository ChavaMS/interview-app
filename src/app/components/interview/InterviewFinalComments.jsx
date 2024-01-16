import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContentStore } from "../../../store/hooks/useContentStore";

export const InterviewFinalComments = () => {
  const { updateInterviewComments } = useContentStore();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const onCommentChanged = ({ target }) => {
    setComment(target.value);
  };

  const navigateToCandidatesPage = () => {
    updateInterviewComments(comment);
    navigate("/candidates");
  };
  
  return (
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
  );
};
