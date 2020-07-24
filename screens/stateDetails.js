import React, { useContext, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles, globalStylesScrollers, globalModal, headerStyle, iconColor } from '../styles/globalStyles';
import Card, { SubHeaderCard, ErrorCard } from '../shared/cards';
import { CumulativeDataContext } from '../shared/apiClient';
import { MaterialIcons } from '@expo/vector-icons';
import DistrictDetails from './districtDetails';

export default function StateDetails({ navigation }) {
    const stateName = navigation.state.routeName

    const { data, isLoading, errorOccurred, setLoading, setErrorOccurred } = useContext(CumulativeDataContext);
    const refresh = () => {
        setLoading(true);
        setErrorOccurred(false)
    }
    
    if (isLoading) {
        return (
            <View style={globalStyles.screenLoadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={{ ...headerStyle.headerText, marginTop: 20 }}>Loading district wise stats ...</Text>
            </View>
        );
    }

    if (errorOccurred) {
        return (
            <View style={globalStyles.container}>
                <TouchableOpacity onPress={refresh}>
                <ErrorCard>
                    <Text style={globalStyles.CardText}>Failed to fetch data from the server :(</Text>
                </ErrorCard>
            </TouchableOpacity>
            </View>
        )
    }

    const { statewise } = data;
    const [modalOpen, setModalOpen] = useState('false')

    if (statewise) {
        stateToBeRendered = statewise.filter((state) => state.state == stateName)
        const { confirmed, recovered, deaths, deltaconfirmed,
            deltadeaths, deltarecovered, lastupdatedtime, active, statenotes } = stateToBeRendered[0]
        return (
            <SafeAreaView style={globalStylesScrollers.safeArea}>
                <ScrollView style={globalStylesScrollers.scrollView}>
                    <TouchableOpacity onPress={() => setModalOpen(true)}>
                    <SubHeaderCard>
                        <MaterialIcons name='details' size={16} 
                            style={{ backgroundColor: iconColor }}
                            onPress={() => setModalOpen(true)}
                        />
                            <Text style={{...globalModal.HeadingCardText}}>{stateToBeRendered[0].state}</Text>
                    </SubHeaderCard>
                    </TouchableOpacity>
                    <View style={globalStyles.container}>
                        <Modal visible={modalOpen} animationType='slide'>
                            <View style={globalModal.modalContent}>
                                <MaterialIcons
                                    name='close'
                                    size={24}
                                    style={{ ...globalModal.modalToggle, ...globalModal.modalClose }}
                                    onPress={() => setModalOpen(false)}
                                />
                                <View style={globalModal.modalContent}>
                                    <DistrictDetails name={stateToBeRendered[0].state}></DistrictDetails>
                                </View>
                            </View>
                        </Modal>

                    </View>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>Total Confirmed:</Text>
                            <Text style={globalStyles.CardText}>{confirmed}</Text>
                        </Card>
                        <Card>
                            <Text style={globalStyles.CardText}>Confirmed today:</Text>
                            <Text style={globalStyles.CardText}>{deltaconfirmed}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card >
                            <Text style={globalStyles.CardText}>Active:</Text>
                            <Text style={globalStyles.CardText}>{active}</Text>
                        </Card>
                        <Card >
                            <Text style={globalStyles.CardText}>Total Recovered:</Text>
                            <Text style={globalStyles.CardText}>{recovered}</Text>
                        </Card>

                    </View>
                    <View style={globalStyles.container}>

                        <Card>
                            <Text style={globalStyles.CardText}>Deaths Today:</Text>
                            <Text style={globalStyles.CardText}>{deltadeaths}</Text>
                        </Card>
                        <Card >
                            <Text style={globalStyles.CardText}>Recovered Today:</Text>
                            <Text style={globalStyles.CardText}>{deltarecovered}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>Total Deaths</Text>
                            <Text style={globalStyles.CardText}>{deaths}</Text>
                        </Card>
                        <Card>
                            <Text style={globalStyles.CardText}>Last Updated</Text>
                            <Text style={globalStyles.CardText}>{lastupdatedtime}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>State Notes</Text>
                            <Text style={globalStyles.CardText}>{statenotes}</Text>
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        return (
            <>
                <View style={globalStyles.container}>
                    <Card>
                        <Text style={globalStyles.CardText}>NOT LOADED States!!!!</Text>
                    </Card>
                </View>
            </>
        )
    }
}