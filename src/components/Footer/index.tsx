import "../../sass/main.scss";
import img from "../../assets/img/logo-white.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <img alt="Full logo" src={img} />
          </picture>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              This website is the example template built by HANS JOO SUNG JAE
              for portfolio purpose only. Nobody can use this for cermmercial
              purpose.
              <a href="#" className="footer__link"></a> Copyright &copy; by HANS
              and Jonas Schmedtmann.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
