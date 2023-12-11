import Card from "../Card";
import "./CardPresentation.css";

function CardPresentation() {
  return (
    <Card className="presentation">
      <div>
        <img
          src="/images/juan.png"
          className="image__presentation"
          alt=""
        />
      </div>
      <div className="container__text">
        <p className="paragraph">front end & game developer</p>
        <p className="paragraph__subtitle">juan pablo.</p>
      </div>
    </Card>
  );
}

export default CardPresentation;
