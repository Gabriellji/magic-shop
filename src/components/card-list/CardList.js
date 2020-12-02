import React, { useContext, useEffect, useState } from 'react';
import { MagicContext } from '../../context/MagicProvider';

import Card from '../card';

import './CardList.css';

const CardList = () => {

    const context = useContext(MagicContext);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        context.getResourse(1);
        setLoading(false)
    }, []);

    return (
        <div className="cardlist_wrap">
            {
                context.strains.data && context.strains.data
                    .map(el => <Card
                        name={el.name}
                        image={el.image}
                        seedCompany={el.seedCompany.name}
                        genetics={el.genetics.names}
                    />)
            }
            
            {/* <div>
                <span>Current page : {context.strains.meta.pagination.current_page}</span>
                <span>Total Pages: {context.strains.meta.pagination.total_pages}</span>
            </div> */}

        

        </div>
    )
}

export default CardList;