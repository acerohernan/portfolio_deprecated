import { useTranslation } from "../i18n/context";
import { AppWrap, MotionWrap } from "../wrapper";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="head-text">{t("Contact Me")}</h2>
      <div className="app__footer-cards">
        <a className="app__footer-card" href="tel:+51999113934">
          <img src="/assets/phone.svg" alt="phone" />
          <p className="p-text">+51 999113934</p>
        </a>
        <a
          className="app__footer-card"
          href="https://api.whatsapp.com/send?phone=51999113934&text=Hola%20Hernan!%20%F0%9F%98%83"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/whatsapp.svg" alt="phone" />
          <p className="p-text">Whatsapp</p>
        </a>
        <a
          className="app__footer-card"
          href="mailto:contacto.acero.hernan@gmail.com"
        >
          <img src="/assets/email.svg" alt="email" />
          <p className="p-text">contact.acero.hernan@gmail.com</p>
        </a>
        <a
          className="app__footer-card"
          href="https://github.com/acerohernan"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/github.svg" alt="email" />
          <p className="p-text">GitHub</p>
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
