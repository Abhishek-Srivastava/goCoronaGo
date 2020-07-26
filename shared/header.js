import React, { useContext, } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { headerStyle, normalize, globalStyles } from '../styles/globalStyles';
import { CumulativeDataContext } from '../shared/apiClient';
import { StateDataContext } from './apiDistrictwise';

export default function Header(props) {
    console.log("props are: " + JSON.stringify(props))
    const { navigation, title } = props
    const cumContext = useContext(CumulativeDataContext);
    const stateContext = useContext(StateDataContext);
    const refresh = () => {
        const { routeName } = navigation.state
        cumContext.setLoading(true);
        cumContext.setErrorOccurred(false);
        if (routeName != "Home") {
            console.log("Refreshing the home page")
            stateContext.setLoading(true);
            stateContext.setErrorOccurred(false);
        }
        navigation.navigate(routeName);
    }
    const openMenu = () => {
        navigation.openDrawer()
    }

    const HeaderComp = () => (
        <View style={headerStyle.header}>
            <MaterialIcons name='menu' size={normalize(32)}
                onPress={openMenu} style={headerStyle.icon}
            />
            <View style={headerStyle.headerTitle}>
                <Image style={{ ...headerStyle.headerImage, }} source={require('../assets/images/coronavirus-nobg.png')} />
                <Text style={headerStyle.headerText}>{title}</Text>
                <TouchableOpacity onPress={refresh}>
                    <FontAwesome
                        name="refresh"
                        size={normalize(24)}
                        color="black"
                        style={{ marginLeft: normalize(20), marginTop: normalize(10) }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
    const ActivityComponent = () => (
        <View style={globalStyles.screenLoadingContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{ ...headerStyle.headerText, marginTop: normalize(20) }}>Loading district wise stats ...</Text>
        </View>
    )
    return (
        <HeaderComp />
    )
}
