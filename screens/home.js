import React, { useContext } from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { globalStyles, globalStylesScrollers, headerStyle } from '../styles/globalStyles';
import Card, {ErrorCard} from '../shared/cards';
import { CumulativeDataContext } from '../shared/apiClient';


export default function Home({ navigation }) {
    const { data, isLoading, errorOccurred, setLoading, setErrorOccurred } = useContext(CumulativeDataContext);
    if (isLoading) {
        return (
            <View style={globalStyles.screenLoadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={{ ...headerStyle.headerText, marginTop: 20 }}>Loading cumulative covid stats ...</Text>
            </View>
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

    const { cases_time_series, tested } = data

    if (cases_time_series) {
        const { totalconfirmed, totalrecovered, totaldeceased, dailyconfirmed, dailydeceased, dailyrecovered, date } = cases_time_series[cases_time_series.length - 1]
        let active = totalconfirmed - totalrecovered - totaldeceased
        return (
            <SafeAreaView style={globalStylesScrollers.safeArea}>
                <ScrollView style={globalStylesScrollers.scrollView}>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>Total Confirmed:</Text>
                            <Text style={globalStyles.CardText}>{totalconfirmed}</Text>
                        </Card>
                        <Card >
                            <Text style={globalStyles.CardText}>Active:</Text>
                            <Text style={globalStyles.CardText}>{active}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card >
                            <Text style={globalStyles.CardText}>Total Recovered:</Text>
                            <Text style={globalStyles.CardText}>{totalrecovered}</Text>
                        </Card>
                        <Card>
                            <Text style={globalStyles.CardText}>Confirmed today:</Text>
                            <Text style={globalStyles.CardText}>{dailyconfirmed}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>Deaths Today:</Text>
                            <Text style={globalStyles.CardText}>{dailydeceased}</Text>
                        </Card>
                        <Card >
                            <Text style={globalStyles.CardText}>Recovered Today:</Text>
                            <Text style={globalStyles.CardText}>{dailyrecovered}</Text>
                        </Card>
                    </View>
                    <View style={globalStyles.container}>
                        <Card>
                            <Text style={globalStyles.CardText}>Total Tested</Text>
                            <Text style={globalStyles.CardText}>{tested[tested.length - 1].totalsamplestested}</Text>
                        </Card>
                        <Card>
                            <Text style={globalStyles.CardText}>Test Data as of</Text>
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