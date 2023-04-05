import '../styles/Footer.scss'
import logo from '../images/logo.svg'
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__icons">iconos</p>
            <img className="footer__img" src={logo} alt="logo taska master"/>

    </footer>
  );
}
export default Footer;
