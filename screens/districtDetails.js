import React, { useContext, } from 'react'
import { View, Text, SafeAreaView, FlatList, } from 'react-native';
import { globalStyles, globalStylesScrollers, globalModal } from '../styles/globalStyles';
import { StateDataContext } from '../shared/apiDistrictwise';
import { ModalCard, HeadingModalCard } from '../shared/cards';

export default function DistrictDetails({ name }) {
    const allStates = useContext(StateDataContext);

    const currentState = allStates[name]

    let myComp = [];

    let allDistrictData = currentState.districtData
    Object.keys(allDistrictData).forEach((dName, index) => {
        allDistrictData[dName]["key"] = dName
        myComp.push(
            allDistrictData[dName]
        )
    });

    const Item = ({ dName, active, confirmed, deceased, recovered }) => (
        <View key={dName}>
            <View style={globalStyles.container}>
                <HeadingModalCard>
                    <Text style={globalModal.HeadingCardText}>{dName}</Text>
                </HeadingModalCard>
            </View>
            <View style={globalStyles.container}>
                <ModalCard>
                    <Text style={globalModal.CardText}>Active</Text>
                    <Text style={globalModal.CardText}>{active}</Text>
                </ModalCard>
                <ModalCard>
                    <Text style={globalModal.CardText}>Confirmed</Text>
                    <Text style={globalModal.CardText}>{confirmed}</Text>
                </ModalCard>
                <ModalCard>
                    <Text style={globalModal.CardText}>Deceased</Text>
                    <Text style={globalModal.CardText}>{deceased}</Text>
                </ModalCard>
                <ModalCard>
                    <Text style={globalModal.CardText}>Recovered</Text>
                    <Text style={globalModal.CardText}>{recovered}</Text>
                </ModalCard>
            </View>
        </View>
    );

    const renderItem = ({item}) => {
        return (
            <Item dName={item.key}
                active={item.active}
                confirmed={item.confirmed}
                deceased={item.deceased}
                recovered={item.recovered} />
        )
    };

    return (
        <SafeAreaView style={globalStylesScrollers.safeArea}>
            <FlatList
                data={myComp}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}