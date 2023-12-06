import { useState } from "react";
import Card from "../Card";
import "./CardWebProject.css";
import ModalWebProjects from "../../web-projects/ModalWebProjects.jsx";

function CardWebProject() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <Card onClick={changeModalVisibility} className="web__projects">
      <div>
        <p className="text__credential paragraph__common paragraph_color">
          showcase
        </p>
        <p className="text__credential paragraph__subtitle__common">
          web projects
        </p>
        <ModalWebProjects isVisible={isModalVisible} />
      </div>
    </Card>
  );
}

export default CardWebProject;
