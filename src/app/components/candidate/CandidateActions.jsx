import { useContentStore, useUiStore } from "../../../store";
import { DeleteConfirmationModal } from "../modals/DeleteConfirmationModal";

export const CandidateActions = () => {
  const { deleteCandidate } = useContentStore();
  const { openEditCandidateModal, openDeleteConfirmationModal } = useUiStore();

  const onEditCandidate = () => {
    openEditCandidateModal();
  };

  const onDeleteCandidate = () => {
    openDeleteConfirmationModal();
  };

  return (
    <>
      <button className="btn btn-secondary me-1" onClick={onEditCandidate}>
        Editar
      </button>
      <button className="btn btn-danger" onClick={onDeleteCandidate}>
        Borrar
      </button>
      <DeleteConfirmationModal deleteFunction={deleteCandidate} />
    </>
  );
};
