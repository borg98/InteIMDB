import "../styles/components/Contact.scss";

export const Contact = () => {
  return (
    <section id="main-contact-wrapper">
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <p>
            <b className="logo-title">Inte IMDB</b>
          </p>
          <p>Filmvägen 143</p>
          <p>123 45, Hollywood</p>
          <p>Tel: +46 123 465 789</p>
          <p>Email: info@inteimdb.com</p>
        </div>

        <div className="contact-icons">
          <img
            src="src/assets/icons8-instagram.svg"
            alt="bild på instagrams logga"
            className="insta-icon"
          />
          <img
            src="src/assets/icons8-facebook.svg"
            alt="bild på facebooks logga"
            className="facebook-icon"
          />
        </div>
      </div>
      <div className="contact-maps-wrapper">karta</div>
    </section>
  );
};
