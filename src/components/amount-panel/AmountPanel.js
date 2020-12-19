import React, { useContext } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import Button from '../button'
import './AmountPanel.scss';

const AmountPanel = () => {
    const context = useContext(MagicContext);

    const handleClick = (e) => {
        const number = Number(e.target.innerText);
        context.changeAmount(number);
    };

    return (
        <div className="amount_panel">
        <Button
        className="btn amount_btn"
        text="10"
        onClick={handleClick}
        />
        <Button
        className="btn amount_btn"
        text="20"
        onClick={handleClick}
        />
        <Button
        className="btn amount_btn"
        text="40"
        onClick={handleClick}
        />
    </div>
    )
}

export default AmountPanel;