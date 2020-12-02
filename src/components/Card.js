const Card = ({ name, image, seedCompany, genetics, lineage }) => (
    <div>
        <h1>{ name }</h1>
        <img src={image} alt={name}></img>
        <h3>Seed Company: {seedCompany}</h3>
        <h3>Genetics: {genetics}</h3>
    </div>
)

export default Card;