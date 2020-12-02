import './PageCounter.css';

const PageCounter = ({ text, info }) => (
    <span className="page-counter">
        {text}
        {info}
    </span>
);

export default PageCounter;