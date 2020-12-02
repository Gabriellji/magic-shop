import React, { useState } from 'react';
import axios from 'axios';

export const MagicContext = React.createContext();

const MagicProvider = props => {

    const [strains, setStrains] = useState([]);

    const _apiBase = 'https://api.otreeba.com/v1/strains?sort=-createdAt&count=50&page=1';

    //const _apiBase = 'http://strainapi.evanbusse.com/Ym4KZL4/strains/search/all'

    const getResourse = () => {
        axios
        .get(_apiBase)
        .then(res => {
            setStrains(res.data)
        })
        .catch(error => console.log(error));   
    }

    return (
        <MagicContext.Provider value={{strains, getResourse}}>
          {props.children}
        </MagicContext.Provider>
      )

}

export default MagicProvider;