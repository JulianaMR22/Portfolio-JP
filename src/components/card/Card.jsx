import "./Card.css";

function Card({ className, children, onClick }) {
  return <div onClick={onClick} className= {` card ${className}`}>
    {children}
  </div>;
}

export default Card;
