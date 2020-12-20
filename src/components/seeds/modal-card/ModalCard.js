import './ModalCard.scss';

const ModalCard = ({ name, image, seedCompany, genetics, onClick, id }) => {
    return (
        <div className="modal-card_wrap" id={id}>
        <h1 className="modal-card_title" id={id} >{name}</h1>
        <img className="modal-card_img" id={id} src={image} alt={name}></img>
        <div className="modal-card-text_wrap" id={id} >
            <h4 className="modal-card_text" id={id} >Seed Company:  </h4>
            <h3 id={id} > {seedCompany}</h3>
            <h4 className="modal-card_text" >Genetics:</h4>
            <h3>{genetics}</h3>
        </div>
    </div>
    )
}

export default ModalCard;