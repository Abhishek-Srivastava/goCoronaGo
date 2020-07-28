import React, { useContext } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles, globalStylesScrollers, normalize } from '../styles/globalStyles';
import Card, { ErrorCard, SubHeaderCard } from '../shared/cards';
import { CumulativeDataContext } from '../shared/apiClient';
import { ShowBusy } from './activityIndComponent';


export default function Home({ navigation }) {
    const { data, isLoading, errorOccurred, setLoading, setErrorOccurred } = useContext(CumulativeDataContext);
    if (isLoading) {
        return (
            <ShowBusy message="Loading cumulative covid stats ..." />
        );
    }

    const refresh = () => {
        setLoading(true);
        setErrorOccurred(false)
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

    const { statewise, tested } = data
    const india = statewise.filter((state) => state.state === "Total")
    if (india) {
        const { confirmed, recovered, deaths,
            deltaconfirmed, deltadeaths, deltarecovered,
            lastupdatedtime, migratedother } = india[0]
        let active = confirmed - recovered - deaths
        return (
            <SafeAreaView style={globalStylesScrollers.safeArea}>
                <ScrollView style={globalStylesScrollers.scrollView}>

                    <SubHeaderCard>
                        <Text style={{ ...globalStyles.SubHeadingCardText, fontSize: normalize(20) }}>India Covid Stats</Text>
                        <Text style={globalStyles.SubHeadingCardText}>{lastupdatedtime}</Text>
                    </SubHeaderCard>
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
                            <Text style={globalStyles.CardText}>Total Active:</Text>
                            <Text style={globalStyles.CardText}>{active}</Text>
                        </Card>
                        <Card>
                            <Text style={globalStyles.CardText}>Migrated/Others</Text>
                            <Text style={globalStyles.CardText}>{migratedother}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card >
                            <Text style={globalStyles.CardText}>Total Recovered:</Text>
                            <Text style={globalStyles.CardText}>{recovered}</Text>
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
                            <Text style={globalStyles.CardText}>Deaths Today:</Text>
                            <Text style={globalStyles.CardText}>{deltadeaths}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>Total Tested</Text>
                            <Text style={globalStyles.CardText}>{tested[tested.length - 1].totalsamplestested}</Text>
                            <Text style={globalStyles.CardText}>{tested[tested.length - 1].testedasof}</Text>
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        return (
            <View style={globalStyles.container}>
                <Card>
                    <Text style={globalStyles.CardText}>Mostly a bug :(!!!!</Text>
                </Card>
            </View>
        )
    }
}