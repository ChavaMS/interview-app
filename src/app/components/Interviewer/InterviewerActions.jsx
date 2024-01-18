import { useContentStore, useUiStore } from "../../../store";
import { DeleteConfirmationModal } from "../modals/DeleteConfirmationModal";

export const InterviewerActions = () => {
  const { openEditInterviewersModal, openDeleteConfirmationModal } =
    useUiStore();

  const { deleteActiveInterviewer } = useContentStore();
  
  const openInterviewerModal = () => {
    openEditInterviewersModal();
  };

  const deleteInterviewer = () => {
    openDeleteConfirmationModal();
  };

  return (
    <>
      <div>
        <button
          onClick={openInterviewerModal}
          className="btn btn-secondary me-1"
        >
          Editar
        </button>
        <button onClick={deleteInterviewer} className="btn btn-danger">
          Eliminar
        </button>
      </div>
      <DeleteConfirmationModal deleteFunction={deleteActiveInterviewer} />
    </>
  );
};
