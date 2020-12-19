import './ModalCard.scss';

const ModalCard = ({ name, image, seedCompany, genetics, onClick, id }) => {
    return (
        <div className="card_wrap" id={id}>
        <h1 className="card_title" id={id} >{name}</h1>
        <img className="card_img" id={id} src={image} alt={name}></img>
        <div className="card-text_wrap" id={id} >
            <h4 className="card_text" id={id} >Seed Company:  </h4>
            <h3 id={id} > {seedCompany}</h3>
            <h4 className="card_text" >Genetics:</h4>
            <h3>{genetics}</h3>
        </div>
    </div>
    )
}

export default ModalCard;