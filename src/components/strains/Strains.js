import { useContext, useState } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import StrainCard from './strain-card';

const Strains = () => {

    const context = useContext(MagicContext);

    const [items, setItems] = useState('');
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);

    // const limit = 10;

    // useEffect(() => {
    //     context.getStrainByRace('Sativa')
    // }, [])
    let arr =[];
    const handleClick = async (e) => {
        await context.getStrainByRace(e.target.innerText);
        // context.infoStrains.sort(() => Math.random() - 0.5).slice(0, limit).map(el => {
        //     return arr.push(el)
        //  });
        //  setItems(arr)
    }

    const loadMore = () => {
        const newStart = start + 10;
        setStart(newStart);
        if ((start || limit) > context.infoStrains.length) {
            const newLimit = 10;
            setLimit(newLimit);
            const newStart = 0;
            setStart(newStart);
            return;   
        }
        const newLimit = limit + 10;
        setLimit(newLimit)
    }

return (
    <>
        <button onClick={(e) => handleClick(e)}>Sativa</button>
        <button onClick={(e) => handleClick(e)}>Indica</button>
        <button onClick={(e) => handleClick(e)}>Hybrid</button>
        <div>
        {
            context.infoStrains && context.infoStrains.slice(start, limit).map(el => {
                return <StrainCard
                name={el.name}
                race={el.race}
            />
            })
        }
       {context.infoStrains &&  <button onClick={() => loadMore()}>load more</button>}
        </div>
    </>
)

}

export default Strains;