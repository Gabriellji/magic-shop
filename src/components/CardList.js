
import React, { useContext, useEffect, useState } from 'react';
import { MagicContext } from '../context/MagicProvider';

import Card from './Card';

const CardList = () => {

    const context = useContext(MagicContext);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        context.getResourse();
        setLoading(false)
    }, []);

    return (
        <div>
            {
                context.strains.data  && context.strains.data
                    .map(el => <Card 
                                name={el.name} 
                                image={el.image}
                                seedCompany={el.seedCompany.name}
                                genetics={el.genetics.names}
                                />)
            }
        </div>
    )
}

// const Card = () => {
//     const [strains, setStrains] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const _apiBase = 'http://www.cannabisreports.com/api/v1.0/strains';

//     //const _apiBase = 'http://strainapi.evanbusse.com/Ym4KZL4/strains/search/all';

//     // const sliced = (obj) => Object.keys(obj).slice(0, 60).reduce((result, key) => {
//     //     result[key] = obj[key];

//     //     return result;
//     // }, {});

//     const getResourse = () => {
//         axios
//             .get(_apiBase)
//             .then(res => {
//                 //setStrains(sliced(res.data))
//                 setStrains(res.data)
//                 console.log(res.data.data)
//                 setLoading(false)
//             })
//             .catch(error => console.log(error));
//     }

//     useEffect(() => {
//         getResourse();
//     }, []);



//     return (
//         <div>
//            {/* { !loading && Object.keys(strains).map(el => <h1>{el}</h1>)} */}
//            {!loading && strains.data.map(el => <h1>{el.name}</h1>)}
//         </div>
//     )
// }

export default CardList;