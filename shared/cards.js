import React from 'react'
import { View } from 'react-native';
import { globalStyles, globalModal } from '../styles/globalStyles';


export default function Card(props) {
    return (
        <View style={globalStyles.Card}>
            <View style={globalStyles.CardContent}>
                {props.children}
            </View>
        </View>
    )
}

export function ModalCard(props) {
    return (
        <View style={globalModal.Card}>
            <View style={globalModal.CardContent}>
                {props.children}
            </View>
        </View>
    )
}

export function HeadingModalCard(props) {
    return (
        <View style={globalModal.HeadingCard}>
            <View style={globalModal.HeadingCardContent}>
                {props.children}
            </View>
        </View>
    )
}

export function SubHeaderCard(props) {
    return (
        <View style={globalStyles.SubHeadingCard}>
            <View style={globalStyles.SubHeadingCardContent}>
                {props.children}
            </View>
        </View>
    )
}

export function ModalSubHeaderCard(props) {
    return (
        <View style={globalModal.SubHeadingCard}>
            <View style={globalModal.SubHeadingCardContent}>
                {props.children}
            </View>
        </View>
    )
}


export function ErrorCard(props) {
    return (
        <View style={globalStyles.ErrorCard}>
            <View style={globalStyles.CardContent}>
                {props.children}
            </View>
        </View>
    )
}