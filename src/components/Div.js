
import React, { useContext } from 'react';
import { MagicContext } from '../context/MagicProvider';

const Div = () => {

    const context = useContext(MagicContext);

    return (
        <div>
    <h1>{context.strains.magicData}</h1>
    <button
    onClick={context.getResourse}
    >

    </button>

        </div>


    )
}

export default Div;