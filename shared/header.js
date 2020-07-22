import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { headerStyle } from '../styles/globalStyles';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={headerStyle.header}>
            <MaterialIcons name='menu' size={28} 
                onPress={openMenu} style={headerStyle.icon}
            />
            <View style={headerStyle.headerTitle}>
                <Image style={headerStyle.headerImage} source={require('../assets/images/coronavirus.png')} />
                <Text style={headerStyle.headerText}>{title}</Text>
            </View>
        </View>
    )
}
