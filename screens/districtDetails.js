import React, { useContext, } from 'react'
import { View, Text, SafeAreaView, FlatList, } from 'react-native';
import { globalStyles, globalStylesScrollers, globalModal, normalize, iconColor } from '../styles/globalStyles';
import { StateDataContext } from '../shared/apiDistrictwise';
import { ModalCard, HeadingModalCard, ModalSubHeaderCard } from '../shared/cards';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function DistrictDetails({ name }) {
    const { data, isLoading, errorOccurred } = useContext(StateDataContext);

    if (isLoading) {
        return (
            <View style={globalStyles.screenLoadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={{ ...headerStyle.headerText, marginTop: normalize(20) }}>Loading district wise stats...</Text>
            </View>
        );
    }

    if (errorOccurred) {
        return (
            <View style={globalStyles.container}>
                <Card>
                    <Text style={globalStyles.CardText}>Failed to fetch data from the server :(</Text>
                </Card>
            </View>
        )
    }

    const currentState = data[name]

    let myComp = [];

    let allDistrictData = currentState.districtData
    Object.keys(allDistrictData).forEach((dName, index) => {
        allDistrictData[dName]["key"] = dName
        myComp.push(
            allDistrictData[dName]
        )
    });

    function compare(a, b) {
        if (a.active < b.active) {
            return 1;
        }
        if (a.active > b.active) {
            return -1;
        }
        return 0;
    }
    myComp.sort(compare);

    const Item = ({ dName, active, confirmed, deceased, recovered, delta }) => (
        <View key={dName}>
            <View style={globalStyles.container}>

                <HeadingModalCard>
                    <Text key={name + dName} style={globalModal.HeadingCardText}>{dName}</Text>
                </HeadingModalCard>
            </View>
            <View style={globalStyles.container}>
                <HeadingModalCard>
                    <Text style={globalModal.HeadingCardText} >Today's Updates: </Text>
                    <Text key={name + dName + "confirmed"} style={globalModal.HeadingCardText}>{delta.confirmed}</Text>
                    <MaterialCommunityIcons name="emoticon-sad-outline" size={normalize(24)} color="yellow" />
                    <Text key={name + dName + "recovered"} style={globalModal.HeadingCardText}>{delta.recovered}</Text>
                    <MaterialCommunityIcons name="emoticon-happy-outline" size={normalize(24)} color="blue" />
                    <Text key={name + dName + "deceased"} style={globalModal.HeadingCardText}>{delta.deceased}</Text>
                    <MaterialCommunityIcons name="emoticon-dead-outline" size={normalize(24)} color="#e4286b" />
                </HeadingModalCard>
            </View>
            <View style={globalStyles.container}>
                <ModalCard>
                    <Text style={{...globalModal.CardText, fontSize: normalize(15)}}>Confirmed</Text>
                    <Text style={globalModal.CardText}>{confirmed}</Text>
                </ModalCard>
                <ModalCard>
                    <Text style={globalModal.CardText}>Active</Text>
                    <Text style={globalModal.CardText}>{active}</Text>
                </ModalCard>
                <ModalCard>
                    <Text style={{...globalModal.CardText, fontSize: normalize(15)}}>Recovered</Text>
                    <Text style={globalModal.CardText}>{recovered}</Text>
                </ModalCard>
                <ModalCard>
                    <Text style={globalModal.CardText}>Deceased</Text>
                    <Text style={globalModal.CardText}>{deceased}</Text>
                </ModalCard>
            </View>
        </View>
    );

    const renderItem = ({ item }) => {
        return (
            <Item dName={item.key}
                active={item.active}
                confirmed={item.confirmed}
                deceased={item.deceased}
                recovered={item.recovered}
                delta={item.delta} />
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