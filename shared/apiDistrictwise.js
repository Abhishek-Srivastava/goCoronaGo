import React, { useEffect, useState, createContext } from 'react'
import { STATE_API_EP } from './appConstants';

export const StateDataContext = createContext();

const StateDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [errorOccurred, setErrorOccurred] = useState(false)
  console.log("Is State loading " + isLoading)
  
  const fetchCumulativeData = async (signal) => {
    fetch(STATE_API_EP, { signal: signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setErrorOccurred(true))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    fetchCumulativeData(signal);
    return function cleanup() {
      abortController.abort()
    }
  }, [isLoading]);
  return (
    <StateDataContext.Provider value={{data: data, isLoading:isLoading, errorOccurred:errorOccurred}}>
      {props.children}
    </StateDataContext.Provider>
  );
}

export default StateDataContextProvider;
