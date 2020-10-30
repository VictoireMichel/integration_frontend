import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, CheckBox, Button} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import CustomHeader from "../Navigation/Header/CustomHeader";

class SignIn extends React.Component{
    render() {
        return(
            <ScrollView>

                <CustomHeader nav={this.props.navigation}/>

                <View style={styles.main_container}>
                    <View><Text style={styles.title_Screen}>Inscription</Text></View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faUser}/></View>
                        <TextInput placeholder="Name" style={styles.inputText}>

                        </TextInput>
                    </View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon= {faUser} /></View>
                        <TextInput placeholder="First name" style={styles.inputText}>

                        </TextInput>
                    </View>


                    <View>
                        <TouchableOpacity style={styles.step_button} onPress = {() => {this.props.navigation.navigate('SignUpStep2')}}>
                            <Text style={styles.stepText}>Etape 2</Text>
                            <FontAwesomeIcon style={styles.stepIcon} icon= {faArrowRight} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main_container}>
                        <Text>Vous avez déjà un compte ?</Text>
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Connexion')}}>
                            <Text style={styles.redirect_signin_text}>Connexion</Text>
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
        marginRight: 30
    },
    stepIcon: {
        color: 'white'
    }
})

export default SignIn