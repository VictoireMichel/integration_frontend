import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMailBulk, faLockOpen, faLock, faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TextInput from 'react-native-input-validator';
import LinearGradient from 'react-native-linear-gradient'


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
            validField: false,
            response: ''
        }
    }


    /**
     * Cette fonction permet de tester en premier lieux que tout les champs soient bien complet.
     * En deuxième lieu, que l'adresse mail soit valable.
     * Et en dernier, que les 2 mots de passe soit identiques.
     * 
     * Par la suite si le compte n'existe pas alors 
     */
    _testFiledField = () => {
        if (this.state.name.length > 0 & this.state.firstName.length > 0 & this.state.email.length > 0
            & this.state.password1.length > 0 & this.state.password2.length > 0) {
            this.setState({ filedField: true }, () => {
                if (this.input.isValid() & this.state.password1 === this.state.password2 & this.state.filedField) {
                    this.setState({ validField: true }, () => {
                        fetch("http://51.77.203.95:3000/users/signin", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "mail": "robin@test.com",
                                "password": "user1234"
                            })
                        })
                            .then(res => res.text())
                            .then(data => {
                                console.log(data)
                                console.log(this.props.navigation.goBack(), this.props.navigation.goBack())
                                if (data === '"connection successful"') {
                                    console.log("ICI ON NAVIGUE VERS L'ACCUEIL")
                                } else {
                                    alert(data)
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    });
                } else if (!this.input.isValid()) {
                    alert('adresse Email non valide');
                } else if (this.state.password1 !== this.state.password2) {
                    alert('Mot de passe non identique');
                } else {
                    console.log('Champ(s) non complet');
                }
            });
        }
        else {
            alert('Champ(s) Incomplet !')
        }
    }

    render() {
        return (
            <LinearGradient
                colors={['#588B43', '#999966']}//#999966 373b44 5a3f37
                style={styles.linearGradient}
            >
                <TouchableOpacity style={styles.stepBack_container} onPress={() => { this.props.navigation.goBack() }}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
                </TouchableOpacity>



                <View style={styles.main_container}>

                    {/*
                    <View style={styles.step}>
                        <View style={styles.circleToDo} />
                        <View style={styles.line} />
                        <View style={styles.line} />
                        <View style={styles.line} />
                        <View style={styles.circleDone} />
                        <View style={styles.line} />
                        <View style={styles.line} />
                        <View style={styles.line} />
                        <View style={styles.circleToDo} />
                    </View>
                    */}

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
                            placeholder="Mot de passe"
                            value={this.state.password1}
                            onChangeText={(text => this.setState({ password1: text }))}
                            style={styles.inputText}>

                        </TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.icon_inputText}><FontAwesomeIcon icon={faLock} /></View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Mot de passe"
                            value={this.state.password2}
                            onChangeText={(text => this.setState({ password2: text }))}
                            style={styles.inputText}>

                        </TextInput>
                    </View>


                    <View style={styles.valid_container}>
                        <TouchableOpacity style={styles.step_button} onPress={() => this._testFiledField()}>
                            <Text style={styles.stepText}>S'inscrire</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%'
    },
    stepBack_container: {
        marginLeft: 25,
        marginTop: 25
    },
    main_container: {
        alignItems: 'center',
        //backgroundColor: 'blue'
    },
    title_Screen: {
        marginTop: 80,
        fontSize: 35,
        color: 'white',
        marginBottom: 25
    },
    step: {
        flexDirection: 'row',
        marginTop: 25
    },
    circleDone: {
        width: 30,
        height: 30,
        backgroundColor: '#599743',
        borderRadius: 30,
        elevation: 5,
        position: 'relative',
        marginLeft: 8,
        marginRight: 8
    },
    line: {
        width: 13,
        height: 4,
        backgroundColor: '#577B43',
        borderRadius: 30,
        marginTop: 12,
        elevation: 5,
        position: 'relative',
        marginLeft: 8,
        marginRight: 8
    },
    circleToDo: {
        width: 30,
        height: 30,
        backgroundColor: '#577B43',
        borderRadius: 30,
        elevation: 5,
        position: 'relative',
        marginLeft: 8,
        marginRight: 8
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
        backgroundColor: '#577B43',
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
        color: '#f1f1f1',
        fontSize: 20,
    },
    valid_container: {
        flexDirection: 'row'
    }
})

export default SignIn