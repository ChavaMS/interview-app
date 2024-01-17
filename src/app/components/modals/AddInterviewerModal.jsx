import Modal from "react-modal";
import "../../styles/modals/modal.css";
import { useUiStore } from "../../../store";
import { useForm } from "../../../hooks";
import { useContentStore } from "../../../store/hooks/useContentStore";
import { useEffect } from "react";

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

export const AddInterviewerModal = () => {
  const { showAddInterviewerModal, closeInterviewersModal } = useUiStore();
  const {
    activeInterviewer,
    addNewInterviewer,
    getLastInterviewerId,
    editInterviewer,
  } = useContentStore();

  const { name, eid, onInputChange, formState, onResetForm, onEditFormState } =
    useForm(initialState);

  useEffect(() => {
    if (showAddInterviewerModal.edit) {
      onEditFormState({
        ...activeInterviewer,
      });

      id = activeInterviewer.id;
    } else {
      onResetForm();
      id = getLastInterviewerId();
    }
  }, [showAddInterviewerModal]);

  const onCloseModal = () => {
    closeInterviewersModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (showAddInterviewerModal.edit) {
      editInterviewer({ ...formState });
    } else {
      addNewInterviewer({ ...formState, id: getLastInterviewerId() });
    }
    onResetForm();
    onCloseModal();
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
        <h1 className="d-inline"> Nuevo entrevistador </h1>
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
            className="form-control"
            placeholder="Ingrese el nombre"
          />
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
            className="form-control"
            placeholder="EID del empleado"
          />
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
