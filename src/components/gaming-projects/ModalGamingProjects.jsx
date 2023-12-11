import "../web-projects/ModalWebProjects.css";
import "../credencials/ModalCredencials.css";
import "./ModalGamingProjects.css";
import minerlight from "/images/minerlight.png";
import amiibo from "/images/amiibo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUpRightFromSquare);

function ModalGamingProjects({ isVisible }) {
  if (isVisible) {
    return (
      <div className="modal">
        <div className="modal__content">
          <h2 className="modal__title__gaming">Gaming Projects</h2>
          <div className="modal_container_projects">
            <img
              src={minerlight}
              className="modal__image__projects image__gaming"
            />
            <div className="modal__container__text">
              <p className="modal__text__project  project__gaming">project 1</p>
              <p className="modal__title__project">Miner light</p>
              <p className="modal__paragraph__project">
                Miner light is a platformer game created from scratch using
                Godot and Aseprite.
              </p>
              <button className="modal__button button__gaming">
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
              <p className="modal__text__project project__gaming">project 2</p>
              <p className="modal__title__project">Racing Toys</p>
              <p className="modal__paragraph__project">
                Racing toys is a racing game made using Unity and based on
                movies like Toy Story.
              </p>
              <button className="modal__button button__gaming">
                Open project
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon__arrow"
                />
              </button>
            </div>
            <img
              src={amiibo}
              className="modal__image__projects image__gaming"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalGamingProjects;
