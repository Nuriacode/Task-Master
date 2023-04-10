import { Link } from "react-router-dom";
import "../styles/Landing.scss";

function Landing() {
  return (
    <main className="mainLanding">
      <section className="mainLanding__content">
        <h3 className="mainLanding__content__title">Login</h3>
        <label className="mainLanding__content__user">
          <i className="fa-solid fa-user"></i>
          Username
        </label>
        <label className="mainLanding__content__password"><i className="fa-solid fa-lock"></i>Password</label>
        <label className="mainLanding__content__login">
          <Link className="mainLanding__content__login--text" to="/createtask">
            Login
          </Link>
        </label>
        <p className="mainLanding__content__signup">New here? Sign up</p>
      </section>
    </main>
  );
}
export default Landing;
