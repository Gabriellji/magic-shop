import './Button.css';

const Button = ({ text, onClick }) => (
    <button
        onClick={(e) => onClick(e)}
    >{text}</button>
)

export default Button;