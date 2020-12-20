import React, { useContext } from 'react';
import { MagicContext } from '../../../context/MagicProvider';
import Button from '../../button';
import PageCounter from '../page-counter';

import './ButtonWrapper.scss';

const ButtonWrapper = () => {

    const context = useContext(MagicContext);

    const paginatePage = (event) => {
        event.target.innerText === 'next' 
            ? context.nextPage() : context.previousPage()
    }

    return (
        <div className="button_wrap">
            {
                context.strains.data && (context.strains.meta.pagination.links.previous &&
                    <Button
                        className="btn previous"
                        text="previous"
                        onClick={paginatePage}
                    />)
            }
            <>
                {
                    <PageCounter text="Current page : "
                        info={context.strains.data && context.strains.meta.pagination.current_page} />
                }
            </>
            <>
                {
                    <PageCounter text="Total Pages: "
                        info={context.strains.data && context.strains.meta.pagination.total_pages} />
                }
            </>
            {
                context.strains.data && (context.strains.meta.pagination.links.next &&
                    <Button
                        className="btn next"
                        text="next"
                        onClick={paginatePage}
                    />)
            }
        </div>
    )

}

export default ButtonWrapper;