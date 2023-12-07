import { useState } from "react";
import Card from "../Card";
import "./CardGameProject.css";
import ModalGamingProjects from "../../gaming-projects/ModalGamingProjects";

function CardGameProject() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <Card onClick={changeModalVisibility} className="game__projects">
      <div>
        <p className="text__credential paragraph__common paragraph_color">
          showcase
        </p>
        <p className="text__credential paragraph__subtitle__common">
          gaming projects
        </p>
      </div>
      <ModalGamingProjects isVisible={isModalVisible} />
    </Card>
  );
}

export default CardGameProject;
