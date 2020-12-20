import './Card.scss';

const Card = ({ name, image, onClick, id }) => (
    <div className="card_wrap" id={id} onClick={(e) => onClick(e)}>
        <h1 className="card_title" id={id} >{name}</h1>
        <img className="card_img" id={id} src={image} alt={name}></img>
    </div>
)

export default Card;