import { useState } from "react";
import Card from "../Card";
import ModalCredencials from "../../credencials/ModalCredencials.jsx";
import "./CardCredential.css";

function CardCredential() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Card onClick={changeModalVisibility} className="credentials">
      <img
        src="/images/juan2.png"
        className="image__presentation__credentials"
        alt=""
      />
      <div>
        <p className="text__credential paragraph__common">more about me</p>
        <p className="text__credential paragraph__subtitle__common">
          credentials
        </p>

        <ModalCredencials isVisible={isModalVisible} />
      </div>
    </Card>
  );
}

export default CardCredential;
