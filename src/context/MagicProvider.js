import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MagicContext = React.createContext();

const MagicProvider = props => {

  const [strains, setStrains] = useState([]);
  const [loading, setLoading] = useState(true);

  let defaultAmount = 18;

  //const _apiNextPage = 'http://www.cannabisreports.com/api/v1.0/strains?pagination_type=page&page='

  //const _apiBase = 'http://strainapi.evanbusse.com/Ym4KZL4/strains/search/all'

  const getData = () => {
    
    const _apiBase = `https://api.otreeba.com/v1/strains?sort=-createdAt&count=${defaultAmount}&pagination_type=page&page=1`;

    setLoading(true);
    const fetchData = async () => {
      const data = await axios.get(_apiBase);
      setStrains(data.data);
      setLoading(false);
    }
    fetchData();
  }

  useEffect(() => {
    getData()
  }, []);

  const changeAmount = (number) => {
    defaultAmount = number;
    getData();
  };

  const nextPage = () => {
    setLoading(true);
    const page = strains.meta.pagination.links.next;
    const fetchNextPage = async () => {
      const data = await axios.get(page)
      setStrains(data.data)
      setLoading(false)
    }
    fetchNextPage();
  }

  const previousPage = () => {
    setLoading(true);
    const page = strains.meta.pagination.links.previous;
    const fetchPreviousPage = async () => {
      const { data } = await axios.get(page)
      setStrains(data.data)
      setLoading(false)
    }
    fetchPreviousPage();
  }

  return (
    <MagicContext.Provider value={{ strains, nextPage, previousPage, loading, changeAmount }}>
      {props.children}
    </MagicContext.Provider>
  )

}

export default MagicProvider;