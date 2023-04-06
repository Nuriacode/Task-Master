import '../styles/Footer.scss'
import logo from '../images/logo.svg'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__div">
      <i class="fa-solid fa-envelope"/>
      <i class="fa-brands fa-github-alt"/>
      <i class="fa-brands fa-linkedin"/>
      </div>
      <p className="footer__text">Create by Nuria Castaño</p>
            <img className="footer__img" src={logo} alt="logo taska master"/>

    </footer>
  );
}
export default Footer;
