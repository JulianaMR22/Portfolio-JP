import "./ModalCredencials.css";
import globant from "../../assets/images/globant.png";
import redbull from "../../assets/images/redbull.png";
import hme from "../../assets/images/hme.png";
import chrobinson from "../../assets/images/chrobinson.png";
import warnermedia from "../../assets/images/warnermedia.png";

function ModalCredencials({ isVisible }) {
  if (isVisible) {
    return (
      <div className="modal">
        <div className="modal__content">
          <h2 className="modal__title">About Me</h2>
          <h3 className="modal__subtitle">Front End Developer</h3>
          <p className="modal__paragraph">
            👋 I'm Juan Pablo a Front End dev 👨‍💻 from Colombia.<br></br> I love
            learning new things everyday 🤓📚.<br></br> I have 7 years of
            experience working with web tools and technologies.<br></br>{" "}
            Hobbyist game dev 🎮
          </p>
          <h2 className="modal__subtitle__companies">
            Companies I've worked with
          </h2>
          <div className="modal__container__companies">
            <div className="modal__firstcontainer__companies">
              <img src={globant} className="modal__globant__company" />
              <img src={redbull} className="modal__companies" />
            </div>
            <div>
              <img src={hme} className="modal__hme__company" />
              <img src={chrobinson} className="modal__companies" />
              <img src={warnermedia} className="modal__companies" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalCredencials;
