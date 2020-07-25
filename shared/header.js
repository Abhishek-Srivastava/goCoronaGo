import React from 'react'
import { Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { headerStyle, normalize, } from '../styles/globalStyles';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={headerStyle.header}>
            <MaterialIcons name='menu' size={normalize(32)}
                onPress={openMenu} style={headerStyle.icon}
            />
            <View style={headerStyle.headerTitle}>
                <Image style={headerStyle.headerImage} source={require('../assets/images/coronavirus-nobg.png')} />
                <Text style={headerStyle.headerText}>{title}</Text>
            </View>
        </View>
    )
}
