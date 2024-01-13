import { useState } from "react";
import "../../styles/interview/questionPage.css";

const initialState = [
  {
    skill: "Javascript",
    question: "Pregunta 1",
    isCorrect: null,
    comments: "",
  },
  {
    skill: "Github",
    question: "Pregunta 2",
    isCorrect: null,
    comments: "",
  },
  {
    skill: "React",
    question: "Pregunta 3",
    isCorrect: null,
    comments: "",
  },
];

export const QuestionsPage = () => {
  const [form, setForm] = useState(initialState);
  const [index, setIndex] = useState(0);
  const formToShow = initialState;

  const nextQuestion = () => {
    setIndex(() => index + 1);
  };

  const prevQuestion = () => {
    setIndex(() => index - 1);
  };

  const onAnswerChanged = (answer) => {
    const newForm = (form[index].isCorrect = answer);
    setForm(newForm);
  };

  const onCommentChanged = (comment) => {
    const newForm = (form[index].comments = comment);
    setForm(newForm);
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
                name="answer"
                id="inlineRadio1"
                value={true}
                checked={form[index]?.isCorrect}
                onChange={() => onAnswerChanged(true)}
              />
              <label className="form-check-label radio-font">Correcto</label>
            </div>
            <div className="form-check form-check-inline ms-5">
              <input
                className="form-check-input radio-font"
                type="radio"
                name="answer"
                id="inlineRadio2"
                value={false}
                checked={!form[index]?.isCorrect}
                onChange={() => onAnswerChanged(false)}
              />
              <label className="form-check-label radio-font">Incorrecto</label>
            </div>
          </div>
          <div className="mt-3">
            <label>Comentarios</label>
            <textarea onChange={onCommentChanged} name="comments" value={form[index]?.comments} className="form-control" rows="5"></textarea>
          </div>
        </div>
        <div className="col-md-2 center-content">
          <button className="btn" onClick={nextQuestion}>
            <i className="fas fa-chevron-right add-user-icon"></i>
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
        <span className="question-count-font">1/5</span>
      </div>
    </div>
  );
};
