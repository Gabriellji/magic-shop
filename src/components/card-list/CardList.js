import React, { useContext } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import Loader from '../loader';
import { cannabisImg } from '../../extra-data/img';

import Card from '../card';

import './CardList.scss';

const CardList = () => {

    const context = useContext(MagicContext);

    return (
        <div className="cardlist_wrap">
            {
                context.loading ? <Loader /> : context.strains.data.map((el, index) => (
                        el.image.includes("no_image.png")
                        ? el.image = cannabisImg[Math.floor(Math.random() * cannabisImg.length)]
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