import './Title.scss'
const Title = ({ text }) => {
    return (
        <ul className="c-rainbow">
            <li className="c-rainbow__layer c-rainbow__layer--white">{text}</li>
            <li className="c-rainbow__layer c-rainbow__layer--orange">{text}</li>
            <li className="c-rainbow__layer c-rainbow__layer--red">{text}</li>
            <li className="c-rainbow__layer c-rainbow__layer--violet">{text}</li>
            <li className="c-rainbow__layer c-rainbow__layer--blue">{text}</li>
            <li className="c-rainbow__layer c-rainbow__layer--green">{text}</li>
            <li className="c-rainbow__layer c-rainbow__layer--yellow">{text}</li>
        </ul>
    )
}

export default Title;