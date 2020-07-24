import React, { useEffect, useState, createContext } from 'react'
import { CUMULATIVE_API_EP } from '../shared/appConstants';
export const CumulativeDataContext = createContext();

const CumulativeDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [errorOccurred, setErrorOccurred] = useState(false)
  console.log("Is home loading " + isLoading)

  const fetchCumulativeData = async (signal) => {
    fetch(CUMULATIVE_API_EP, { signal: signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setErrorOccurred(true))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal
    fetchCumulativeData(signal);
    return function cleanup() {
      abortController.abort()
    }
  }, [isLoading]);
  return (
    <CumulativeDataContext.Provider value={{data: data, 
    isLoading:isLoading, errorOccurred:errorOccurred, setLoading:setLoading,
    setErrorOccurred: setErrorOccurred}}>
    {/* <CumulativeDataContext.Provider value={data, }> */}
      {props.children}
    </CumulativeDataContext.Provider>
  );
}

export default CumulativeDataContextProvider;
