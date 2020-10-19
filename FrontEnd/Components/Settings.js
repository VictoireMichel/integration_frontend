//COMPONENT INUTILE A PRIORI => A VOIR

import React from 'react'
import { Text, View } from 'react-native'
import {StyleSheet} from "react-native";

class Settings extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_container}>
                    Settings
                </Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    text_container: {
        fontSize:50
    }
})
export default Settings;