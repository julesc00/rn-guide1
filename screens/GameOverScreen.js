import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

import Colors from "../constants/colors"

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
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
    }
})

export default GameOverScreen
