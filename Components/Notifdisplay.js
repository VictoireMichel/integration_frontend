import React from "react";
import {View, Text, StyleSheet} from "react-native";
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
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    text: {
        color: "black",
    },
    boxIcon: {
        flex: 1,
        flexDirection: "column",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: "15%",
        paddingBottom: "15%",
    },
    boxInfo: {
        flex: 2,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    textInfo: {
        flex: 1,
        textAlignVertical: "center",
        marginLeft: "10%",
        fontSize: 20,
    },
});