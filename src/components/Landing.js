import { Link } from "react-router-dom";
import '../styles/Landing.scss';

function Landing() {

  return (
    <main>
      <section>
        <label className="btn">
          <Link to="/createtask">
            Empieza a crear tus tareas
          </Link>
        </label>
      </section>
    </main>
  );
}
export default Landing;
