import { useState } from "react";
import "../../styles/interview/questionPage.css";
import { useContentStore } from "../../../store/hooks/useContentStore";
import { useNavigate } from "react-router-dom";

const initialState = [
  {
    skill: "Javascript",
    question: "Pregunta 1",
    isCorrect: false,
    comments: "",
  },
  {
    skill: "Github",
    question: "Pregunta 2",
    isCorrect: false,
    comments: "",
  },
  {
    skill: "React",
    question: "Pregunta 3",
    isCorrect: false,
    comments: "",
  },
];

export const QuestionsPage = () => {
  const [form, setForm] = useState(initialState);
  const [index, setIndex] = useState(0);
  const { addInterview } = useContentStore();
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (index === form.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(() => index + 1);
  };

  const prevQuestion = () => {
    if (index === 0) return;
    setIndex(() => index - 1);
  };

  const onAnswerChanged = (answer) => {
    const newFormState = [...form];
    newFormState[index].isCorrect = answer;
    setForm(newFormState);
  };

  const onCommentChanged = ({ target }) => {
    const newFormState = [...form];
    newFormState[index].comments = target.value;
    setForm(newFormState);
  };

  const submitForm = () => {
    addInterview(form);
    navigate('/candidates/results');
  };

  return (
    <div className="container-fluid p-4">
      <h1>Preguntas</h1>
      <div className="row mt-5">
        <div className="col-md-2 center-content">
          <button className="btn" onClick={prevQuestion}>
            <i className="fas fa-chevron-left add-user-icon"></i>
          </button>
        </div>
        <div className="col-md-8 text-center">
          <h3 className="d-inline-block w-100 skill-title">
            {form[index]?.skill}
          </h3>
          <h3 className="d-inline-block w-100 mt-3">{form[index]?.question}</h3>
          <div className="mt-3">
            <div className="form-check form-check-inline me-5">
              <input
                className="form-check-input radio-font"
                type="radio"
                name="isCorrect"
                id="inlineRadio1"
                checked={form[index]?.isCorrect}
                onChange={() => onAnswerChanged(true)}
              />
              <label className="form-check-label radio-font">Correcto</label>
            </div>
            <div className="form-check form-check-inline ms-5">
              <input
                className="form-check-input radio-font"
                type="radio"
                name="isCorrect"
                id="inlineRadio2"
                checked={!form[index]?.isCorrect}
                onChange={() => onAnswerChanged(false)}
              />
              <label className="form-check-label radio-font">Incorrecto</label>
            </div>
          </div>
          <div className="mt-3">
            <label>Comentarios</label>
            <textarea
              onChange={onCommentChanged}
              name="comments"
              value={form[index]?.comments}
              className="form-control"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="col-md-2 center-content">
          <button className="btn" onClick={nextQuestion}>
            <i className="fas fa-chevron-right add-user-icon"></i>
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
        <span className="question-count-font">
          {index + 1}/{form.length}
        </span>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-danger" onClick={submitForm}>
          Finalizar
        </button>
      </div>
    </div>
  );
};
