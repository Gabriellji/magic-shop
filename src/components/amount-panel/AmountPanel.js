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
        text="9"
        onClick={handleClick}
        />
        <Button
        text="18"
        onClick={handleClick}
        />
        <Button
        text="36"
        onClick={handleClick}
        />
    </div>
    )
}

export default AmountPanel;