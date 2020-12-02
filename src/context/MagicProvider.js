import React, { useState } from 'react';
import axios from 'axios';

export const MagicContext = React.createContext();

const MagicProvider = props => {

  const [strains, setStrains] = useState([]);

  const _apiBase = 'https://api.otreeba.com/v1/strains?sort=-createdAt&count=30&pagination_type=page&page=1';
  //const _apiNextPage = 'http://www.cannabisreports.com/api/v1.0/strains?pagination_type=page&page='

  //const _apiBase = 'http://strainapi.evanbusse.com/Ym4KZL4/strains/search/all'

  const getResourse = () => {
    axios
      .get(_apiBase)
      .then(res => {
        setStrains(res.data)
      })
      .catch(error => console.log(error));
  }

  const nextPage = () => {
    const page = strains.meta.pagination.links.next;
    axios
      .get(page)
      .then(res => {
        setStrains(res.data)
      })
      .catch(error => console.log(error));
  }

  const previousPage = () => {
    const page = strains.meta.pagination.links.previous;
    axios
      .get(page)
      .then(res => {
        setStrains(res.data)
      })
      .catch(error => console.log(error));
  }

  return (
    <MagicContext.Provider value={{ strains, getResourse, nextPage, previousPage }}>
      {props.children}
    </MagicContext.Provider>
  )

}

export default MagicProvider;