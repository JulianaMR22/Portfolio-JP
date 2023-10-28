import Card from "../Card";
import "./CardTools.css";

function CardTools() {
  return (
    <Card className="tools">
      <div className="tools__technologies">
        <img
          src="./src/assets/images/html (1).png"
          className="logo__techonologies__html__css "
        />
        <img
          src="./src/assets/images/css (1).png"
          className="logo__techonologies__html__css "
        />
        <img
          src="./src/assets/images/js (1).png"
          className="logo__techonologies__js "
        />
        <img
          src="./src/assets/images/react (1).png"
          className="logo__techonologies__react "
        />
        <img
          src="./src/assets/images/vue.png"
          className="logo__techonologies "
        />
        <img
          src="./src/assets/images/git (1).png"
          className="logo__techonologies "
        />
        <img
          src="./src/assets/images/ts.png"
          className="logo__techonologies "
        />
        <img
          src="./src/assets/images/unity.png"
          className="logo__techonologies "
        />
        <img
          src="./src/assets/images/unreal.png"
          className="logo__techonologies "
        />
        <img
          src="./src/assets/images/godot.png"
          className="logo__techonologies "
        />
      </div>
      <div>
        <p className="tools__paragraph">specialization</p>
        <p className="tool__subtitle">Tools and Tech stack</p>
      </div>
    </Card>
  );
}

export default CardTools;
