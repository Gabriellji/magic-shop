import React, { useContext, useEffect, useState } from 'react';
import { MagicContext } from '../../context/MagicProvider';

import Card from '../card';

import './CardList.css';

const CardList = () => {

    const context = useContext(MagicContext);

    useEffect(() => {
        context.getResourse();
    }, []);

    return (
        <div className="cardlist_wrap">
            {
                context.loading ? <h1>Loading...</h1> : Object.entries(context.strains)[0][1].filter(el => !el.image.includes("no_image.png"))
                    .map((el, index) => <Card
                        key={index}
                        name={el.name}
                        image={el.image}
                        seedCompany={el.seedCompany.name}
                        genetics={el.genetics.names}
                    />)
                    
            }
        </div>
    );
};

export default CardList;