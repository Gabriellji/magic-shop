import React, { useContext } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import Loader from '../loader';
import data from '../../extra-data/img';

import Card from '../card';

import './CardList.scss';

const CardList = () => {

    const context = useContext(MagicContext);

    return (
        <div className="cardlist_wrap">
            {
                context.loading ? <Loader /> : context.strains.data.map((el, index) => (
                        el.image.includes("no_image.png")
                        ? el.image = data[Math.floor(Math.random() * data.length)]
                        : <Card
                            key={index}
                            name={el.name}
                            image={el.image}
                            seedCompany={el.seedCompany.name}
                            genetics={el.genetics.names}
                        />))
            }
        </div>
    );
};

export default CardList;