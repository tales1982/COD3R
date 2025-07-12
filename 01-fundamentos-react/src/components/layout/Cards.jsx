import "./Cards.css";

function Card(props) {
    const cardsStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00',
    }
  return (
    <>
      <div className="Card" style={cardsStyle}>
        <div className="Title">{props.titulo}</div>
        <div className="Content">{props.children}</div>
      </div>
    </>
  );
}

Card.displayName = "Card";

export default Card;
