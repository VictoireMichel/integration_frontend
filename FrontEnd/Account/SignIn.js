import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faKey, faEnvelope} from '@fortawesome/free-solid-svg-icons';


class SignIn extends React.Component{
    render() {
        return(
            <ScrollView>
                <View style={styles.main_container}>
                    <View><Text style={styles.title_Screen}>Connexion</Text></View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faEnvelope}/></View>
                        <TextInput placeholder="Email" style={styles.inputText}>

                        </TextInput>
                    </View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faKey} /></View>
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputText}>

                        </TextInput>
                    </View>

                    <View style={styles.main_container}>
                        <CheckBox style={styles.checkbox}></CheckBox>
                        <Text style={styles.checkBoxText}>Remember me</Text>
                    </View>

                    <View style={styles.main_container}>
                        <TouchableOpacity style={styles.loginBtn} onPress = {() => {console.log('Connexion')}}>
                            <Text style={styles.loginText}>Se connecter</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main_container}>
                        <Text>Pas encore de compte ?</Text>
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Enregistrement')}}>
                            <Text style={styles.redirect_signin_text}>Enregistrez-vous</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_Screen: {
        fontSize:35,
        color:'green'
    },
    inputView:{
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
    inputText: {
        padding: 10,
    },
    iconTextInput:{
        padding: 10,
    },
    redirect_signin_text: {
        color: 'green',
        fontWeight: 'bold'
    },
    checkbox: {
        alignSelf: "center",
    },
    checkBoxText: {
        textAlign: 'right'
    },
    loginBtn:{
        width:270,
        backgroundColor:'#588B43',
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText: {
        color: 'white',
        fontSize: 20
    }
})

export default SignIn