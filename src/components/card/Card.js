import Button from '../button';
import './Card.scss';

const Card = ({ name, image, seedCompany, genetics, lineage }) => (
    <div className="card_wrap">
        <h1 className="card_title">{ name }</h1>
        <img className="card_img" src={image} alt={name}></img>
        <h3 className="card_text">Seed Company: {seedCompany}</h3>
        <h3 className="card_text" >Genetics: {genetics}</h3>
        <Button
            className="btn card_btn"
            text="Add to Card"
        />
    </div>
)

export default Card;