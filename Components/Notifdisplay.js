import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Box from "./potDetails/Box";

class Notifdisplay extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxInfo}>
                    <Text style={styles.textInfo}>{this.props.notif}</Text>
                </View>
            </View>
        );
    }
}

export default Notifdisplay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 280,
        height: 90,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#F8F8F8",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // its for android
        elevation: 5,
        position: "relative",
        borderRadius: 10,
    },
    text: {
        color: "black",
    },
    boxInfo: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInfo: {
        margin: 15,
        textAlign: 'center',
        fontSize: 20,
    },
});