import React from 'react';
import PropTypes from "prop-types"
import { StyleSheet, View, Text, StatusBar } from "react-native"
import { MaterialCommunityIcons, Feather, MaterialIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp, condition }) {
    return weatherOptions[condition] ? (
        <LinearGradient
            colors={weatherOptions[condition].color}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <View style={styles.c1}>
                    {weatherOptions[condition].that}
                </View>

                <View style={styles.c2}>
                    <Text style={styles.temp}>
                        {temp} ℃
            </Text>
                </View>
            </View>

            <View style={styles.textBox}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subTitle}>
                    {weatherOptions[condition].subTitle}
                </Text>
            </View>
        </LinearGradient>
    ) : mDefault;
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    c1: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    c2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "600",
        color: "white"
    },
    textBox: {
        justifyContent: "center",
        flex: 1,
        textAlign: "left",
        alignItems: "flex-start"
    }
})

const mDefault = (
    <LinearGradient
        colors={["#888888", "#ffffff"]}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <View style={styles.c1}>
                <MaterialIcons
                    color="white"
                    size={200}
                    name="error" />
            </View>

            <View style={styles.c2}>
                <Text style={styles.temp}>
                    Error!
    </Text>
            </View>

        </View>

        <View style={styles.halfContainer}>
            <Text style={styles.temp}>
                Error
        </Text>
        </View>
    </LinearGradient>)

const weatherOptions = {
    Clouds: {
        that: (<MaterialCommunityIcons
            color="white"
            size={200}
            name="cloud" />),
        color: ["#999999", "#666666", "#333333"],
        title: "Fucking Cloud",
        subTitle: "It's Cloudy. fuck you"
    },
    Clear: {
        that: (<Feather
            color="white"
            size={130}
            name="sun" />),
        color: ["#00aaff44", "#00aaff88", "#00aaffcc"],
        title: "Fucking Clear",
        subTitle: "get out and play~"
    },
    Thunderstorm: {

    },
    Drizzle: {

    },
    Rain: {

    },
    Snow: {

    },
    Atmosphere: {

    },
    Haze: {

    },
    Mist: {

    },
    Dust: {

    }
}