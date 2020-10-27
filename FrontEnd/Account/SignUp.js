import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {faLockOpen, faMailBulk, faLock} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const mailIcon =  () => {
    return <FontAwesomeIcon icon={ faMailBulk } />
}
const passwordIcon =  () => {
    return <FontAwesomeIcon icon={ faLockOpen } />
}
const passwordLockIcon =  () => {
    return <FontAwesomeIcon icon={ faLock } />
}

class SignUp extends React.Component{
    render() {
        return(
            <ScrollView style={styles.container_out}>
                <View style={styles.container_in}>


                    <View style={styles.container_title}>
                        <Text style={styles.title_text}>Inscription</Text>
                    </View>


                    <View style={styles.container_input}>
                        <View style={styles.icon_inputText}>{mailIcon()}</View>
                        <TextInput
                            placeholder="First name"
                            style={styles.input_text}
                        />
                    </View>
                    <View style={styles.container_input}>
                        <View style={styles.icon_inputText}>{mailIcon()}</View>
                        <TextInput
                            placeholder="Last name"
                            style={styles.input_text}
                        />
                    </View>
                    <View style={styles.container_input}>
                        <View style={styles.icon_inputText}>{mailIcon()}</View>
                        <TextInput
                            placeholder="Email"
                            style={styles.input_text}
                        />
                    </View>
                    <View style={styles.container_input}>
                        <View style={styles.icon_inputText}>{passwordIcon()}</View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={styles.input_text}
                        />
                    </View>
                    <View style={styles.container_input}>
                        <View style={styles.icon_inputText}>{passwordLockIcon()}</View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password again"
                            style={styles.input_text}
                        />
                    </View>


                    <TouchableOpacity style={styles.container_validate}
                                      onPress={()=> {this.props.navigation.navigate('Acceuil')}}>
                        <Text style={styles.validate_text}>S'inscrire</Text>
                    </TouchableOpacity>



                    <View style={styles.container_Bottom}>
                        <View style={styles.container_bottomText}>
                            <Text style={styles.text_bottom}>Vous avez déjà un compte ? </Text>
                        </View>
                        <TouchableOpacity style={styles.container_bottomButton}
                                          onPress={()=> {this.props.navigation.navigate('SignIn')}}>
                            <Text style={styles.text_button}>
                                Connexion
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container_out: {
        backgroundColor: '#e2e2e2',
        height: '100%',
        flexDirection: 'column'
    },
    container_in: {
        backgroundColor: 'white',
        height: 550,
        marginTop: '10%',
        marginBottom: '10%',
        width: 310,
        marginRight: 'auto',
        marginLeft: 'auto',

        // its for android
        elevation: 5,
        borderRadius:10,
    },
    container_title: {
        marginTop: 30,
        marginBottom: 30
    },
    title_text: {
        color: "#588B43",
        fontSize: 36,
        textAlign: "center",
        letterSpacing: 1.15,
    },
    container_input: {
        height: 37,
        width: 270,
        paddingLeft: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',

        flexDirection: 'row',
        alignItems: 'center',


        borderRadius:10,
        elevation: 5,
        position:'relative'
    },
    icon_inputText: {
        paddingRight: 10
    },
    input_text: {
        fontSize: 18,
        backgroundColor: '#fff',
        color: '#424242'
    },
    container_validate: {
        width: 270,
        height: 40,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor:'#588B43',

        // its for android
        elevation: 5,
        position:'relative',
        borderRadius:10,
    },
    validate_text: {
        color: "white",
        fontSize: 18
    },
    container_Bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    container_bottomText: {

    },
    text_bottom: {},
    container_bottomButton: {},
    text_button: {
        color: '#588B43',
        fontWeight: 'bold'
    },
})

export default SignUp