import Input from "../../components/Input";
import { Facebook, Google, Twitter } from "../../components/Resources/Icon";

const Login = () => {
  return (
    <section className="vh-100  ">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 ms-5 me-3">Sign in with: </p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating ms-3 rounded-circle "
                >
                  <Facebook />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-3 rounded-circle"
                >
                  <Twitter />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating  rounded-circle"
                >
                  <Google />
                </button>
              </div>

              <div className="divider d-flex align-items-center mt-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className=" form-outline my-2 pt-4">
                <Input type="password" placeholder=" " required />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline my-3 pt-4">
                <Input type="password" placeholder=" " required />
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
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center  mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="#!" className="link-danger">
                    Register
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

export default Login;
