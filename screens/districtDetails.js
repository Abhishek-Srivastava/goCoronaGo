import React, { useContext, useState, } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, } from 'react-native';
import { globalStyles, globalStylesScrollers, globalModal, normalize, iconColor } from '../styles/globalStyles';
import { StateDataContext } from '../shared/apiDistrictwise';
import { ModalCard, HeadingModalCard, ModalSubHeaderCard } from '../shared/cards';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const MyDelta = ({ delta, name, dName, display }) => {
    if (display) {
        return <View />
    }
    return (
        <HeadingModalCard>
            <Text style={globalModal.HeadingCardText} >Today's Updates: </Text>
            <Text key={name + dName + "confirmed"} style={globalModal.HeadingCardText}>{delta.confirmed}</Text>
            <MaterialCommunityIcons name="emoticon-sad-outline" size={normalize(22)} color="yellow" />
            <Text key={name + dName + "recovered"} style={globalModal.HeadingCardText}>{delta.recovered}</Text>
            <MaterialCommunityIcons name="emoticon-happy-outline" size={normalize(22)} color="blue" />
            <Text key={name + dName + "deceased"} style={globalModal.HeadingCardText}>{delta.deceased}</Text>
            <MaterialCommunityIcons name="emoticon-dead-outline" size={normalize(22)} color="#e4286b" />
        </HeadingModalCard>
    );
}
export default function DistrictDetails({ name }) {
    const { data, isLoading, errorOccurred } = useContext(StateDataContext);

    if (isLoading) {
        return (
            <View style={globalStyles.screenLoadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={{ ...headerStyle.headerText, marginTop: normalize(16) }}>Loading district wise stats...</Text>
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


    const Item = ({ dName, active, confirmed, deceased, recovered, delta }) => {
        const [display, setDisplay] = useState(true)
        return (
            <View key={dName}>
                <TouchableOpacity onPress={() => setDisplay(!display)}>
                    <ModalSubHeaderCard>
                        <MaterialIcons name='details' size={normalize(14)}
                            style={{ backgroundColor: iconColor }}
                            onPress={() => setModalOpen(true)}
                        />
                        <Text key={name + dName} style={globalModal.HeadingCardText}>{dName}</Text>
                    </ModalSubHeaderCard>
                </TouchableOpacity>
                <View style={globalStyles.container}>
                    <MyDelta delta={delta} name={name} dName={dName} display={display} />
                </View>
                <View style={globalStyles.container}>
                    <ModalCard>
                        <Text style={{ ...globalModal.CardText, fontSize: normalize(12) }}>Confirmed</Text>
                        <Text style={globalModal.CardText}>{confirmed}</Text>
                    </ModalCard>
                    <ModalCard>
                        <Text style={globalModal.CardText}>Active</Text>
                        <Text style={globalModal.CardText}>{active}</Text>
                    </ModalCard>
                    <ModalCard>
                        <Text style={{ ...globalModal.CardText, fontSize: normalize(12) }}>Recovered</Text>
                        <Text style={globalModal.CardText}>{recovered}</Text>
                    </ModalCard>
                    <ModalCard>
                        <Text style={globalModal.CardText}>Deceased</Text>
                        <Text style={globalModal.CardText}>{deceased}</Text>
                    </ModalCard>
                </View>
            </View>
        )
    };

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