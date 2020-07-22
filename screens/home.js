import React, { useContext } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles, globalStylesScrollers } from '../styles/globalStyles';
import Card from '../shared/cards';
import { CumulativeDataContext } from '../shared/apiClient';


export default function Home({ navigation }) {
    const { cases_time_series, tested } = useContext(CumulativeDataContext);
    if (cases_time_series.length) {
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
                            <Text style={globalStyles.CardText}>{tested[tested.length-1].totalsamplestested}</Text>
                        </Card>
                        <Card>
                            <Text style={globalStyles.CardText}>Test Data as of</Text>
                            <Text style={globalStyles.CardText}>{tested[tested.length-1].testedasof}</Text>
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
                        <Text style={globalStyles.CardText}>NOT LOADED!!!!</Text>
                    </Card>
                </View>
            </>
        )
    }
}