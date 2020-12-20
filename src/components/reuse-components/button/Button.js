import './Button.scss';

const Button = ({ text, className, onClick }) => (
    <button
        className={className}
        onClick={(e) => onClick(e)}
    >{text}</button>
)

export default Button;