import Button from '../button';

import shopcart from './shopping-cart.png';
import info from './cannabis.png';
import './Card.scss';

const element = <img src={shopcart} alt="shopping-cart"></img>
const cannabis = <img src={info} alt="cannabis"></img>

const Card = ({ name, image, seedCompany, genetics, onClick }) => (
    <div className="card_wrap" onClick={() => onClick()}>
        <h1 className="card_title">{name}</h1>
        <img className="card_img" src={image} alt={name}></img>
        <div className="card-text_wrap">
            <h4 className="card_text">Seed Company:  </h4>
            <h3> {seedCompany}</h3>
            {/* <h4 className="card_text" >Genetics:</h4>
            <h3>{genetics}</h3> */}
        </div>
        {/* <div className="card_btn_wrap">
            <Button
                className="btn card_btn"
                text={cannabis}
            />
            <Button
                className="btn card_btn"
                text={element}
            />
        </div> */}
    </div>
)

export default Card;