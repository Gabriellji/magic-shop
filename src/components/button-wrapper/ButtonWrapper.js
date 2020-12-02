import React, { useContext } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import Button from '../button'
import './ButtonWrapper.css';

const ButtonWrapper = () => {

    const context = useContext(MagicContext);

    const next = () => {
        context.nextPage()
    }

    const previous = () => {
        context.previousPage()
    }

    return (
        <div className="button_wrap">
            {
                context.strains.data && (context.strains.meta.pagination.links.previous &&
                    <Button
                        text="previous"
                        onClick={previous}
                    />)
            }
            {
                context.strains.data && (context.strains.meta.pagination.links.next &&
                    <Button
                        text="next"
                        onClick={next}
                    />)
            }
        </div>
    )

}

export default ButtonWrapper;