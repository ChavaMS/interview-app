import Modal from "react-modal";
import "../../styles/modals/modal.css";
import { useUiStore } from "../../../store";

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

export const AddCandidateModal = () => {
  const { showAddCandidateModal, closeCandidateModal } = useUiStore();

  const onCloseModal = () => {
    closeCandidateModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit form");
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
            type="text"
            className="form-control"
            placeholder="Ingrese el nombre"
          />
        </div>

        <div className="form-group mb-2">
          <label>Correo electronico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Id del empleado"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Tipo</label>
          <select className="form-select" defaultValue={"0"}>
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
