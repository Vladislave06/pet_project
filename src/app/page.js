import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="login_page">
      <div className="container login_page_container">
        <div className="login_wrapper">
          <div className="row">
            <div className="col logo_wrapper">
              <h2>Login</h2>
            </div>
          </div>

          <div className="row">
            <div className="col login_input_wrapper">
              <div className="form-floating mb-3">
                <div className="input-icon">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                  />
                  <label htmlFor="floatingInput">Email</label>
                  <img
                    src="/images/login_email_icon.png"
                    alt="Email Icon"
                    className="icon-email"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col login_input_wrapper">
              <div className="form-floating mb-3">
                <div className="input-icon">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder=""
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <img
                    src="/images/login_password_icon.png"
                    alt="Password Icon"
                    className="icon-password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col btn_login">
              <button type="button" className="btn-login">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
