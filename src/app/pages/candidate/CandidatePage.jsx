import "../../styles/candidate/candidatePage.css";

export const CandidatePage = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-6">
          <div className="shadow candidate-information">
            <div className="d-flex">
              <i className="fa-solid fa-user add-user-icon me-5"></i>
              <div>
                <h3 className="candidate-information-title">Nombre completo</h3>
                <h3>Salvador</h3>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="candidate-information-title">Correo electrónico</h3>
              <h3>salvador.medina@gmail.com</h3>
            </div>
            <div className="mt-4">
              <h3 className="candidate-information-title">Tipo</h3>
              <h3>Interno</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shadow candidate-information"></div>
        </div>
      </div>
    </div>
  );
};
