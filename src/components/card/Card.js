import Button from '../button';

import shopcart from './shopping-cart.png';
import info from './cannabis.png';
import './Card.scss';

const element = <img src={shopcart} alt="shopping-cart"></img>
const cannabis = <img src={info} alt="cannabis"></img>

const Card = ({ name, image, seedCompany, genetics }) => (
    <div className="card_wrap">
        <h1 className="card_title">{name}</h1>
        <img className="card_img" src={image} alt={name}></img>
        <div className="card-text_wrap">
            <h3 className="card_text"><b>Seed Company:  </b><br/> {seedCompany}</h3>
            <h3 className="card_text" ><b>Genetics: </b><br/>{genetics}</h3>
        </div>
        <div>
            <Button
                className="btn card_btn"
                text={cannabis}
            />
            <Button
                className="btn card_btn"
                text={element}
            />
        </div>
    </div>
)

export default Card;