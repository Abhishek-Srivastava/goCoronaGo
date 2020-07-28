import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';
import { globalStyles, headerStyle, } from '../styles/globalStyles';
import { moderateScale } from '../styles/scale_utils';

export const ShowBusy = ({ message }) => {
    return (
        <View style={globalStyles.screenLoadingContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{ ...headerStyle.headerText, marginTop: moderateScale(20), color: 'white' }}>{message}</Text>
        </View>
    )
};