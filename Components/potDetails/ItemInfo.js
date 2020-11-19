import React from "react";
import {View, Text, StyleSheet} from "react-native";
import * as Progress from "react-native-progress";

let a = 'blue';

class ItemInfo extends React.Component {
    componentDidMount() {
        a = this.props.color;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.boxIcon}>
                </View>
                <View style = {styles.boxInfo}>
                    <Text style = {styles.textInfo}>
                        Température
                    </Text>
                    <View style = {styles.progressInfo}>
                        <Progress.Bar progress = {20 / 100} animated = {false} height = {20} width = {170} />
                    </View>
                </View>
            </View>
        )
    }
}

export default ItemInfo;

console.log(a);
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft:'5%',
        marginRight:'5%',
        backgroundColor: 'white',
        borderRadius: 20
    },
    text: {
        color: 'black'
    },
    boxIcon: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: a,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: '15%',
        paddingBottom: '15%'
    },
    boxInfo: {
        flex: 2,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    textInfo: {
        flex: 1,
        textAlignVertical: 'center',
        marginLeft: '10%',
        fontSize: 20
    },
    progressInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});