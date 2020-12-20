import { useContext } from 'react';
import { MagicContext } from '../../context/MagicProvider';

const Strains = () => {

    const context = useContext(MagicContext)

    return (
        <>
        {
            context.infoStrains && console.log(context.infoStrains.Afpak)
        }
        </>
    )

}

export default Strains;