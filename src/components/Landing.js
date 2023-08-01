import { Link } from "react-router-dom";
import "../styles/Landing.scss";
import { useState } from "react";

function Landing() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }


  return (
    <main className="mainLanding">
      <section className="mainLanding__content">
        <h3 className="mainLanding__content__title">Iniciar sesión</h3>
        <form onSubmit={handleSubmit}>
          <label for="email" className="mainLanding__content__user">
            <i className="fa-solid fa-user"/>
            <input type="email" id="email" name="name" required/>
            Correo electrónico
          </label>
          <label for="password" className="mainLanding__content__password">
            <i className="fa-solid fa-lock"/>
            <input type="password" id="password" name="password" required/>
            Contraseña
          </label>
          <label className="mainLanding__content__login">
            <input className="mainLanding__content__login--text" type="submit" value="Entrar"/>
          </label>
        </form>
        <p className="mainLanding__content__signup">
          ¿Nuevo por aquí? Regístrate
        </p>
      </section>
    </main>
  );
}
export default Landing;
