import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';
import { globalStyles, headerStyle, normalize } from '../styles/globalStyles';


export const ShowBusy = ({ message }) => {
    return (
        <View style={globalStyles.screenLoadingContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{ ...headerStyle.headerText, marginTop: normalize(20), color: 'white' }}>{message}</Text>
        </View>
    )
};