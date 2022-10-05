import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="vh-100  ">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <h1 className="text-center">Welcom!</h1>
              <div className=" form-outline my-2 pt-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder=" "
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  First name
                </label>
              </div>
              <div className=" form-outline my-2 pt-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder=" "
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Last name
                </label>
              </div>
              <div className=" form-outline my-2 pt-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder=" "
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline my-3 pt-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder=" "
                  required
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                    required
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    I agree to the manufacturer's terms
                  </label>
                </div>
              </div>

              <div className="text-center mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0 ">
                  <a href="#!" className="link-danger r">
                    Back to home page
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
