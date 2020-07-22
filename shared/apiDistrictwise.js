import React, { useEffect, useState, createContext } from 'react'
import { STATE_API_EP } from './appConstants';
import { ActivityIndicator, View, Text } from 'react-native';
import { globalStyles, headerStyle } from '../styles/globalStyles';

export const StateDataContext = createContext();

const StateDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  console.log("Is State loading " + isLoading)

  const fetchCumulativeData = async (signal) => {
    fetch(STATE_API_EP, { signal: signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
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

  if (isLoading) {
    return (
      <View style={globalStyles.screenLoadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={{ ...headerStyle.headerText, marginTop: 20 }}>Loading district wise stats...</Text>
      </View>
    )
  }
  return (
    <StateDataContext.Provider value={data}>
      {props.children}
    </StateDataContext.Provider>
  );
}

export default StateDataContextProvider;
