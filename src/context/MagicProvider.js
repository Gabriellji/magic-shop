import React, { useState } from 'react';
import axios from 'axios';

export const MagicContext = React.createContext();

const initialState = {
    magicData: 'lala',
    data: ''
};

const MagicProvider = props => {

    const [strains, setStrains] = useState(initialState);

    const _apiBase = 'http://www.cannabisreports.com/api/v1.0/';

    const getResourse = () => {
        axios
        .get(`${_apiBase}strains`)
        .then(res => {
          console.log(res.data)
            setStrains({
              ...strains,
              // data: res.data
            })
        })

        
    }

    return (
        <MagicContext.Provider value={{strains, getResourse}}>
          {props.children}
        </MagicContext.Provider>
      )

}

export default MagicProvider;