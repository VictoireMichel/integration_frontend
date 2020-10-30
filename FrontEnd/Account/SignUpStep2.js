import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, CheckBox, Button} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMailBulk, faLockOpen, faLock, faArrowCircleLeft, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import CustomHeader from "../Navigation/Header/CustomHeader";


class SignIn extends React.Component{
    render() {
        return(
            <ScrollView>

                <CustomHeader nav={this.props.navigation}/>

                <View style={styles.main_container}>
                    <View><Text style={styles.title_Screen}>Inscription</Text></View>




                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faMailBulk} /></View>
                        <TextInput  placeholder="Email" style={styles.inputText}>

                        </TextInput>
                    </View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faLockOpen} /></View>
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputText}>

                        </TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faLock} /></View>
                        <TextInput secureTextEntry={true} placeholder="Password again" style={styles.inputText}>

                        </TextInput>
                    </View>



                    <View>
                        <TouchableOpacity style={styles.step_button} onPress = {() => {this.props.navigation.goBack()}}>
                            <FontAwesomeIcon style={styles.stepIcon} icon= {faArrowLeft} />
                            <Text style={styles.stepText}>Retour Etape 1</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.step_button} onPress = {() => {this.props.navigation.navigate('Acceuil')}}>
                            <Text style={styles.stepText}>S'inscrire</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        paddingTop: 35,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_Screen: {
        fontSize:35,
        color:'green',
        marginBottom: 25
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
    step_button:{
        width:270,
        backgroundColor:'#588B43',
        borderRadius:25,
        height:50,
        marginTop:40,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    stepText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 30
    },
    stepIcon: {
        color: 'white'
    }
})

export default SignIn