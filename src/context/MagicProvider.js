import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MagicContext = React.createContext();

const MagicProvider = props => {

  const [strains, setStrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [infoStrains, setInfoStrains] = useState('');

  //const strainKey = process.env.STRAIN_API_KEY;

  let defaultAmount = 10;

  //const _apiNextPage = 'http://www.cannabisreports.com/api/v1.0/strains?pagination_type=page&page='

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

  const _transformApi = (obj) => {
    let arr = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // console.log(obj[key].id)
        arr.push({
          name: key,
          id:obj[key].id,
          race:obj[key].race,
          flavors:obj[key].flavors,
          effects:obj[key].effects
        })
      }
    }
    return arr;
  }

  const getInfoData = () => {
    const _strainApiBase = `http://strainapi.evanbusse.com/Ym4KZL4/strains/search/all`;

    setLoading(true);
    const fetchData = async () => {
      const data = await axios.get(_strainApiBase);
      const finalData = _transformApi(data.data);
      setInfoStrains(finalData);
      setLoading(false);
      // const arr = strains.data;
      // const res = arr.map(el => el.name);
      // const oo = Object.keys(infoStrains).filter((el, i) => el.includes(arr.flat()));
      // console.log(oo)
    }
    fetchData();
  }

  useEffect(() => {
    getData();
    getInfoData();
    // const arr = strains.data.map(el => el.name);
    //console.log(strains.data.map(el => el.name))
    //console.log(strains.data.map((el, i) => arr.inludes()))
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
    <MagicContext.Provider value={{
      strains,
      nextPage,
      previousPage,
      loading,
      changeAmount,
      infoStrains,
      setInfoStrains
    }}>
      {props.children}
    </MagicContext.Provider>
  )

}

export default MagicProvider;