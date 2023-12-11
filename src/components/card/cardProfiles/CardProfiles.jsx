import Card from "../Card";
import "./CardProfiles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faXTwitter, faGithub, faItchIo);

function CardProfiles() {
  return (
    <Card className="profiles">
      <div className="container__icons__profiles">
        <FontAwesomeIcon icon={faLinkedinIn} className="icon__profiles" />
        <FontAwesomeIcon icon={faXTwitter} className="icon__profiles" />
        <FontAwesomeIcon icon={faGithub} className="icon__profiles" />
        <FontAwesomeIcon icon={faItchIo} className="icon__profiles" />
      </div>
      <div>
        <p className="text__credential paragraph__common">stay with me</p>
        <p className="text__credential paragraph__subtitle__common">profiles</p>
      </div>
    </Card>
  );
}

export default CardProfiles;
