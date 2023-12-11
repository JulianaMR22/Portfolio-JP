import "../web-projects/ModalWebProjects.css";
import "../credencials/ModalCredencials.css";
import cryptocurrencies from "/images/cryptocurrencies.png";
import dailyfity from "/images/dailyfity.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUpRightFromSquare);

function ModalWebProjects({ isVisible }) {
  if (isVisible) {
    return (
      <div className="modal">
        <div className="modal__content">
          <h2 className="modal__title__projects">Web Projects</h2>
          <div className="modal_container_projects">
            <img src={cryptocurrencies} className="modal__image__projects" />
            <div className="modal__container__text">
              <p className="modal__text__project">project 1</p>
              <p className="modal__title__project">Cryptocurrencies</p>
              <p className="modal__paragraph__project">
                Cryptocurrencies it's a platform that show you some of the most
                famous crypto currencies and their values.
              </p>
              <button className="modal__button">
                Open project
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon__arrow"
                />
              </button>
            </div>
          </div>
          <div className="modal_container_web">
            <div className="modal__container__text">
              <p className="modal__text__project">project 2</p>
              <p className="modal__title__project">DailyFity</p>
              <p className="modal__paragraph__project">
                DailyFity it's a platform that You can use to have an order in
                your training routine.
              </p>
              <button className="modal__button">
                Open project
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon__arrow"
                />
              </button>
            </div>
            <img src={dailyfity} className="modal__image__projects" />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalWebProjects;
