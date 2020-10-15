import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class SignUp extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.container_title}>
                    <Text style={styles.title_text}>Sign Up</Text>
                </View>

                <View style={styles.container_input}>
                    <TextInput
                        placeholder="Email"
                        style={styles.input_text}
                    />
                </View>

                <View style={styles.container_input}>
                    <TextInput
                        placeholder="Password"
                        style={styles.input_text}
                    />
                </View>

                <View style={styles.container_input}>
                    <TextInput
                        placeholder="Password again"
                        style={styles.input_text}
                    />
                </View>

                <TouchableOpacity style={styles.container_validate}>
                    <Text style={styles.validate_text}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%'
    },
    container_title: {
        marginTop: 50,
        marginBottom: 30
    },
    title_text: {
        color: "#588B43",
        fontSize: 36,
        textAlign: "center",
        letterSpacing: 1.15,
    },
    container_input: {

    },
    input_text: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        color: "#588B43",
        height: 37,
        width: 307,
        borderRadius: 8,
        paddingLeft: 30,
        fontSize: 18,
        backgroundColor:'#F8F8F8',
        elevation: 5,
        position:'relative'
    },
    container_validate: {
        width: 307,
        height: 40,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor:'#588B43',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // its for android
        elevation: 5,
        position:'relative',
        borderRadius:10,
    },
    validate_text: {
        color: "white",
        fontSize: 18
    }
})

export default SignUp