import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native"


import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors"

const GameOverScreen = props => {
    return (
        <ScrollView>
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
                        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the
                        number <Text style={styles.highlight}>{props.userNumber}</Text>.
                    </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>
                    NEW GAME
                </MainButton>
            </View>
        </ScrollView>
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
        fontSize: 40
    },
    image: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").width * 0.7,
        borderRadius: Dimensions.get("window").width * 0.7 / 2,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: Dimensions.get("window").height / 40
    },
    resultContainer: {
        marginHorizontal: 40,
        marginVertical: Dimensions.get("window").height / 60
    },
    resultText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").height < 400 ? 16 : 18
    },
    highlight: {
        color: Colors.primary,
    }
})

export default GameOverScreen
