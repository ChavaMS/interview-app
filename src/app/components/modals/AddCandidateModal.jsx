import Modal from "react-modal";
import "../../styles/modals/modal.css";
import { useUiStore } from "../../../store";
import { useForm } from "../../../hooks";
import { useContentStore } from "../../../store/hooks/useContentStore";

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

export const AddCandidateModal = () => {
  const { showAddCandidateModal, closeCandidateModal } = useUiStore();
  const { addNewCandidate } = useContentStore();
  const { name, email, type, formState, onInputChange, onResetForm } = useForm(initialState);

  const onCloseModal = () => {
    closeCandidateModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addNewCandidate(formState);
    onResetForm();
    onCloseModal();
  };

  return (
    <Modal
      isOpen={showAddCandidateModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <div className="modal-title-content">
        <i className="fa-solid fa-user-plus modal-icon"></i>
        <h1 className="d-inline">Datos del candidato </h1>
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
          <label>Correo electronico</label>
          <input
            value={email}
            name="email"
            onChange={onInputChange}
            type="email"
            className="form-control"
            placeholder="Correo"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Tipo</label>
          <select
            value={type}
            name="type"
            onChange={onInputChange}
            className="form-select"
          >
            <option value="0">Seleccione el tipo</option>
            <option value="1">Interno</option>
            <option value="2">Externo</option>
          </select>
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
