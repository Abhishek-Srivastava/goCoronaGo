import React, { useEffect, useState, createContext } from 'react'
import { STATE_API_EP, TIMEOUT } from './appConstants';
import customFetch from './cutomFetch';

export const StateDataContext = createContext();

const StateDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [errorOccurred, setErrorOccurred] = useState(false)

  let headers = new Headers({
    'Accept-Encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  });

  const fetchCumulativeData = async (signal) => {
    customFetch(STATE_API_EP, { signal: signal, headers: headers }, TIMEOUT)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => { console.log(error); return (setErrorOccurred(true)) })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    fetchCumulativeData(signal);
    return function cleanup() {
      if (isLoading == false) {
        abortController.abort()
      }
    }
  }, [isLoading]);
  return (
    <StateDataContext.Provider value={{
      data: data, isLoading: isLoading,
      errorOccurred: errorOccurred, setLoading: setLoading,
      setErrorOccurred: setErrorOccurred,
    }}>
      {props.children}
    </StateDataContext.Provider>
  );
}

export default StateDataContextProvider;
