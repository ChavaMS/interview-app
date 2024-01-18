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
  name: "",
  id: 0,
  eid: "",
};
let id = 0;

const formValidations = {
  name: [(value) => value.length > 0, "El nombre es requerido"],
  eid: [(value) => value.length > 0, "El EID es requerido"],
};

export const AddInterviewerModal = () => {
  const { showAddInterviewerModal, closeInterviewersModal } = useUiStore();
  const {
    activeInterviewer,
    addNewInterviewer,
    getLastInterviewerId,
    editInterviewer,
  } = useContentStore();

  const {
    name,
    eid,
    formState,
    nameValid,
    eidValid,
    isFormValid,
    onInputChange,
    onResetForm,
    onEditFormState,
  } = useForm(initialState, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // If the modal was opened to edit an interviewer we load the activeInterviewers data
    if (showAddInterviewerModal.edit) {
      onEditFormState({
        ...activeInterviewer,
      });

      id = activeInterviewer.id;
    } else {
      setFormSubmitted(false);
      onResetForm();
      id = getLastInterviewerId();
    }
  }, [showAddInterviewerModal]);

  const onCloseModal = () => {
    closeInterviewersModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    if (showAddInterviewerModal.edit) {
      editInterviewer({ ...formState });
    } else {
      addNewInterviewer({ ...formState, id: getLastInterviewerId() });
    }

    onCloseModal();
    // Resets the form and void errors to appear before closing the modal
    setFormSubmitted(false);
    onResetForm();
  };

  return (
    <Modal
      isOpen={showAddInterviewerModal.open}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <div>
        <i className="fa-solid fa-user-plus modal-icon"></i>
        <h1 className="d-inline ms-3"> Nuevo entrevistador </h1>
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
          <label>Id del Empleado</label>
          <input
            disabled={true}
            value={id}
            name="id"
            onChange={onInputChange}
            type="text"
            className="form-control"
            placeholder="Id del empleado"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label">EID</label>
          <input
            value={eid}
            name="eid"
            onChange={onInputChange}
            type="text"
            className={
              "form-control " +
              (!!eidValid && formSubmitted ? "input-error" : "")
            }
            placeholder="EID del empleado"
          />
          {!!eidValid && formSubmitted ? (
            <small className="error-message">{eidValid}</small>
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
