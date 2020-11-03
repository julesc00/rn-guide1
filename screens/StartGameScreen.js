import React from "react"
import { View, Text, Button, TextInput, StyleSheet } from "react-native"

import Card from "../components/Card"

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{props.title}</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center"
    }
})

export default StartGameScreen