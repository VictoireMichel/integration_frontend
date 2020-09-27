import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Notifications extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_menu}>Mes notifications</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text_menu: {
        fontSize: 25,
        color: 'red'
    },
})

export default Notifications

/*background: #F1F2B5;
background: -webkit-linear-gradient(to right, #135058, #F1F2B5);
background: linear-gradient(to right, #135058, #F1F2B5);
*/