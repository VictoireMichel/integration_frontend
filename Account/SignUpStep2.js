import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMailBulk, faLockOpen, faLock, faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomHeader from "../Navigation/Header/CustomHeader";
import TextInput from 'react-native-input-validator';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.route.params.name,
            firstName: this.props.route.params.firstName,
            email: '',
            password1: '',
            password2: '',
            filedField: false,
            validField: false
        }
    }

    _testFiledField() {
        if (this.state.name !== '' & this.state.firstName !== '' & this.state.email !== ''
            & this.state.password1 !== '' & this.state.password2 !== '') {
            this.setState({ filedField: true });
        }
    }
    _testValidData() {
        this._testFiledField();

        if (this.input.isValid() & this.state.password1 === this.state.password2 & this.state.filedField) {
            console.log('Champs valide');
            this.setState({ validField: true });
        } else if (!this.input.isValid()) {
            alert('adresse Email non valide');
        } else if (this.state.password1 !== this.state.password2) {
            alert('Mot de passe non identique');
        } else {
            alert('Champ(s) non complet');
        }
        this._postDataApi()
    }

    _postDataApi() {
        //alert('To Do : PostMethod')
        if (this.state.validField) {

            fetch("http://51.77.203.95:3000/users/signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "mail": "robin@test.com",
                    "password": "user1234",
                    "firstName": "robin",
                    "lastName": "castermane",
                    "learningMode": false
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    render() {
        return (
            <ScrollView>

                <CustomHeader nav={this.props.navigation} />

                <View style={styles.main_container}>

                    <View style={styles.step}>
                        <View style={styles.circleDone} />
                        <View style={styles.line} />
                        <View style={styles.circleDone} />
                    </View>

                    <View><Text style={styles.title_Screen}>Inscription</Text></View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon={faMailBulk} /></View>
                        <TextInput
                            onRef={(r) => {
                                this.input = r;
                            }}
                            placeholder="Email"
                            type="email"
                            value={this.state.email}
                            onChangeText={(text => this.setState({ email: text }))}
                            style={styles.inputText}>

                        </TextInput>
                    </View>

                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon={faLockOpen} /></View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            value={this.state.password1}
                            onChangeText={(text => this.setState({ password1: text }))}
                            style={styles.inputText}>

                        </TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon={faLock} /></View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password again"
                            value={this.state.password2}
                            onChangeText={(text => this.setState({ password2: text }))}
                            style={styles.inputText}>

                        </TextInput>
                    </View>



                    <View style={styles.valid_container}>
                        <View>
                            <TouchableOpacity style={styles.step_button} onPress={() => { this.props.navigation.goBack() }}>
                                <Text style={styles.stepText}>Retour</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.step_button} onPress={() => this._testValidData()}>
                                <Text style={styles.stepText}>S'inscrire</Text>
                            </TouchableOpacity>
                        </View>
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
        marginTop: 30,
        fontSize: 35,
        color: 'green',
        marginBottom: 25
    },
    step: {
        flexDirection: 'row',
        marginTop: 25
    },
    circleDone: {
        width: 30,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 30,
        elevation: 5,
        position: 'relative'
    },
    line: {
        width: 100,
        height: 5,
        backgroundColor: 'green',
        borderRadius: 30,
        marginTop: 12,
        elevation: 5,
        position: 'relative',
        marginLeft: 10,
        marginRight: 10
    },
    inputView: {
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
        borderRadius: 10,
        elevation: 5,
        position: 'relative'
    },
    inputText: {
        padding: 10,
        marginBottom: 20,
        borderWidth: 0,
    },
    step_button: {
        width: 140,
        backgroundColor: '#588B43',
        borderRadius: 15,
        height: 50,
        marginTop: 40,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    stepText: {
        color: 'white',
        fontSize: 20,
    },
    valid_container: {
        flexDirection: 'row'
    }
})

export default SignIn