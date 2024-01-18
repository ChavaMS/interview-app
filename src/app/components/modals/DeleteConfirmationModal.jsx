import Modal from "react-modal";
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

export const DeleteConfirmationModal = ({ deleteFunction }) => {
  const { showDeleteConfirmationModal, closeDeleteConfirmationModal } =
    useUiStore();

  const onCloseModal = () => {
    closeDeleteConfirmationModal();
  };

  const onSubmit = (event) => {
    console.log('flag');
    event.preventDefault();
    deleteFunction();
    onCloseModal();
  };

  return (
    <Modal
      isOpen={showDeleteConfirmationModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <div>
        <h3 className="d-inline">
          ¿Estas seguro que deseas eliminar el elemento?
        </h3>
      </div>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-secondary" onClick={onCloseModal}>
            Cancelar
          </button>
          <button className="btn btn-danger" type="submit">
            Eliminar
          </button>
        </div>
      </form>
    </Modal>
  );
};
