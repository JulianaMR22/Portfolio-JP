import Card from "../Card";
import "./CardCredential.css"

function CardCredential() {
  return (
    <Card className="credentials">
      <img
        src="./src/assets/images/juan2.png"
        className="image__presentation__credentials"
        alt=""
      />
      <div>
        <p className="text__credential paragraph__common">more about me</p>
        <p className="text__credential paragraph__subtitle__common">
          credentials
        </p>
      </div>
    </Card>
  );
}

export default CardCredential;
