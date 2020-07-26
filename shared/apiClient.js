import React, { useEffect, useState, createContext } from 'react'
import { CUMULATIVE_API_EP, TIMEOUT } from '../shared/appConstants';
import customFetch from './cutomFetch'

export const CumulativeDataContext = createContext();

const CumulativeDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [errorOccurred, setErrorOccurred] = useState(false)

  let headers = new Headers({
    'Accept-Encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  });

  const fetchCumulativeData = async (signal) => {
    customFetch(CUMULATIVE_API_EP, { signal: signal, headers: headers }, TIMEOUT)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => { console.log(error); return (setErrorOccurred(true)) })
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal
    fetchCumulativeData(signal);
    return function cleanup() {
      if (isLoading == false) {
        abortController.abort()
      }
    }
  }, [isLoading]);
  return (
    <CumulativeDataContext.Provider value={{
      data: data,
      isLoading: isLoading, errorOccurred: errorOccurred, setLoading: setLoading,
      setErrorOccurred: setErrorOccurred
    }}>
      {props.children}
    </CumulativeDataContext.Provider>
  );
}

export default CumulativeDataContextProvider;
