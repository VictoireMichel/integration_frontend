import React from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

export default class Screen extends React.Component{
    render() {
        return(
            <View>
                <SafeAreaView>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer()}>
                        <Text>Test</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}