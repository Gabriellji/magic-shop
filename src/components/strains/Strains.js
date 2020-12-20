import { useContext, useState } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import StrainCard from './strain-card';

const Strains = () => {

    const context = useContext(MagicContext);

    const [items, setItems] = useState('');

    const limit = 10;

    // useEffect(() => {
    //     context.getStrainByRace('Sativa')
    // }, [])
    let arr =[];
    const handleClick = (e) => {
        context.getStrainByRace(e.target.innerText);
        context.infoStrains.sort(() => Math.random() - 0.5).slice(0, limit).map(el => {
            return arr.push(el)
         });
         setItems(arr)
    }

return (
    <>
        <button onClick={(e) => handleClick(e)}>Sativa</button>
        <button onClick={(e) => handleClick(e)}>Indica</button>
        <button onClick={(e) => handleClick(e)}>Hybrid</button>
        <div>
        {
            items &&
            items.map(el => {
                return <StrainCard
                name={el.name}
                race={el.race}
            />
            })
        }
        </div>
    </>
)

}

export default Strains;