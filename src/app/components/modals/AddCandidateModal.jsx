import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useUiStore, useContentStore } from "../../../store";
import { useForm } from "../../../hooks";
import "../../styles/modals/modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const initialState = {
  id: 0,
  interviewer: null,
  name: "",
  email: "",
  type: 0,
};

const formValidations = {
  name: [(value) => value.length > 0, "El nombre es requerido"],
  email: [(value) => value.includes("@"), "El email debe tener un @"],
  type: [(value) => value == 1 || value == 2, "Debe seleccionar un tipo"],
};

export const AddCandidateModal = () => {
  const { showAddCandidateModal, closeCandidateModal } = useUiStore();
  const { activeCandidate, addNewCandidate, editCandidate } = useContentStore();
  const {
    name,
    email,
    type,
    formState,
    nameValid,
    emailValid,
    typeValid,
    isFormValid,
    onInputChange,
    onResetForm,
    onEditFormState,
  } = useForm(initialState, formValidations);
  const [formSubmitted, setFormSubmitted] = useState();

  useEffect(() => {
    if (showAddCandidateModal.edit) {
      onEditFormState({
        ...activeCandidate,
      });
    } else {
      setFormSubmitted(false);
      onResetForm();
    }
  }, [showAddCandidateModal]);

  const onCloseModal = () => {
    closeCandidateModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    if (showAddCandidateModal.edit) {
      editCandidate({ ...formState });
    } else {
      addNewCandidate(formState);
    }

    onCloseModal();
    // Resets the form and void errors to appear before closing the modal
    setFormSubmitted(false);
    onResetForm();
  };

  return (
    <Modal
      isOpen={showAddCandidateModal.open}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <div className="modal-title-content">
        <i className="fa-solid fa-user-plus modal-icon"></i>
        <h1 className="d-inline ms-3">Datos del candidato </h1>
      </div>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label className="form-label">Nombre completo</label>
          <input
            value={name}
            name="name"
            onChange={onInputChange}
            type="text"
            className={
              "form-control " +
              (!!nameValid && formSubmitted ? "input-error" : "")
            }
            placeholder="Ingrese el nombre"
          />
          {!!nameValid && formSubmitted ? (
            <small className="error-message">{nameValid}</small>
          ) : (
            ""
          )}
        </div>

        <div className="form-group mb-2">
          <label>Correo electronico</label>
          <input
            value={email}
            name="email"
            onChange={onInputChange}
            type="email"
            className={
              "form-control " +
              (!!emailValid && formSubmitted ? "input-error" : "")
            }
            placeholder="Correo"
          />
          {!!emailValid && formSubmitted ? (
            <small className="error-message">{emailValid}</small>
          ) : (
            ""
          )}
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Tipo</label>
          <select
            value={type}
            name="type"
            onChange={onInputChange}
            className={
              "form-select " +
              (!!typeValid && formSubmitted ? "input-error" : "")
            }
          >
            <option value="0">Seleccione el tipo</option>
            <option value="1">Interno</option>
            <option value="2">Externo</option>
          </select>
          {!!typeValid && formSubmitted ? (
            <small className="error-message">{typeValid}</small>
          ) : (
            ""
          )}
        </div>

        <div className="w-100 d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-outline-primary btn-block mt-2 "
          >
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </div>
      </form>
    </Modal>
  );
};
