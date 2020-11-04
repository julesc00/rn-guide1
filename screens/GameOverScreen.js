import React from "react"
import { View, Text, StyleSheet, Button, Image } from "react-native"

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors"

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.title}>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={require("../assets/bsc-ori-surfer-girl-viii.jpg")}
                //source={{ uri: "https://www.castlefineart.com/assets/img/uploads/bsc-ori-surfer-girl-viii.jpg" }}
            />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
            </BodyText>
            </View>
            <Button
                title="NEW GAME"
                color={Colors.accent}
                onPress={props.onRestart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: Colors.primary,
        fontSize: 50
    },
    image: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: 30
    },
    resultContainer: {
        marginHorizontal: 40,
        marginVertical: 10
    },
    resultText: {
        textAlign: "center",
        fontSize: 18
    },
    highlight: {
        color: Colors.primary,
    }
})

export default GameOverScreen
