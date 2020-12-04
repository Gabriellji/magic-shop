import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MagicContext = React.createContext();

const MagicProvider = props => {

  const [strains, setStrains] = useState([]);
  const [loading, setLoading] = useState(true)

  const _apiBase = 'https://api.otreeba.com/v1/strains?sort=-createdAt&count=30&pagination_type=page&page=1';
  //const _apiNextPage = 'http://www.cannabisreports.com/api/v1.0/strains?pagination_type=page&page='

  //const _apiBase = 'http://strainapi.evanbusse.com/Ym4KZL4/strains/search/all'

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await axios.get(_apiBase);
      setStrains(data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

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

  const _transformData = (obj) => {
    return Object.entries(obj)[0][1].filter(el => !el.image.includes("no_image.png"))
  }

  // const getReadyData = () => {
  //   axios
  //     .get(_apiBase)
  //     .then(res => {
  //       const result = _transformData(res.data);
  //       setData(result)
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <MagicContext.Provider value={{ strains, nextPage, previousPage, loading }}>
      {props.children}
    </MagicContext.Provider>
  )

}

export default MagicProvider;