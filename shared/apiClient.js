import React, { useEffect, useState, createContext } from 'react'
import { CUMULATIVE_API_EP } from '../shared/appConstants';
import { ActivityIndicator, View, Text } from 'react-native';
import { globalStyles, headerStyle } from '../styles/globalStyles';
export const CumulativeDataContext = createContext();

const CumulativeDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  console.log("Is loading " + isLoading)

  const fetchCumulativeData = async (signal) => {
    fetch(CUMULATIVE_API_EP, { signal: signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
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
  if (isLoading) {
    return (
      <View style={globalStyles.screenLoadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={{ ...headerStyle.headerText, marginTop: 20 }}>Loading cumulative covid stats...</Text>
      </View>
    )
  }
  return (
    <CumulativeDataContext.Provider value={data}>
      {props.children}
    </CumulativeDataContext.Provider>
  );
}

export default CumulativeDataContextProvider;
