import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
        <Header title="Guess a number" />
        <StartGameScreen title="Start a New Game" />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
