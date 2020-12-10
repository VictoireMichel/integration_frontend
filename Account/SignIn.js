import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faKey, faEnvelope, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import store from "../redux/store";
import AsyncStorage from '@react-native-community/async-storage'

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userId: null
        }
    }

    /**
     * Cette fonction permet de vérifier la validité de l'email et de se connecter.
     * Une alerte s'affichera si les champs sont vides, l'email n'est pas valide ou n'existe pas, le mot de passe est incorrect.
     * Si tous les champs sont valides et l'utilisateur existe en base de données, alors l'utilisateur sera redirigé vers l'accueil.
     *
     */
    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.email.length == 0 || this.state.password.length == 0) {
            alert('Champ(s) incomplet(s) !')
        } else if (reg.test(text) === false) {
            alert('Adresse email non valide');
            this.setState({ email: text })
            return false;
        } else if (this.state.email.length > 0 & this.state.password.length > 0 & reg.test(text) === true) {
            this.setState({ email: text })
            console.log("Email format is correct");

            fetch("https://pi2-ephec.herokuapp.com/users/signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "mail": this.state.email,
                    "password": this.state.password
                })
            }).then((response) => response.json())
                .then((json) => {
                    if (json === 'email/password incorrect') {
                        console.log("NOK");
                        alert(json)
                    }
                    else {
                        console.log("OK");
                        this.setState({ userId: json[0].id })
                        this._changeGlobalState();
                        this.storeData();
                        this.props.navigation.navigate("Accueil")
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    /**
     *
     *Fonction permettant de changer les valeurs des reducers du store.
     *
     * Ici on affecte au reducer userId l'id de l'utilisateur récupéré depuis la requête API faite dans la fonction validate.
     * On affecte à true isLoggedIn.
     *
     * @private
     */
    _changeGlobalState() {
        const action = { type: "SET_ID", value: this.state.userId }
        const action2 = { type: "LOGIN", value: true }
        this.props.dispatch(action)
        this.props.dispatch(action2)
    }

    /**
     *
     * Fonction permettant de persister les données venant du store, ainsi lorsqu'on quitte l'application
     * et qu'on l'a réouvre on reste bien connecté.
     *
     * @returns {Promise<void>}
     */
    storeData = async () => {
        try {
            await AsyncStorage.multiSet([['userID', JSON.stringify(store.getState().storeUserId.id)], ['login', JSON.stringify(store.getState().isLogged.isLoggedIn)]]);
        } catch (e) {
            alert(e);
        }
    }

    render() {

        return (
            <LinearGradient
                colors={['#588B43', '#373b44']}//#999966 373b44 5a3f37
                style={styles.linearGradient}
            >

                <TouchableOpacity style={styles.stepBack_container} onPress={() => { this.props.navigation.openDrawer() }}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
                </TouchableOpacity>

                <View style={styles.main_container}>


                    <View><Text style={styles.title_Screen}>Connexion</Text></View>

                    <View style={styles.inputView}>
                        <View style={styles.iconTextInput}><FontAwesomeIcon icon={faEnvelope} /></View>
                        <TextInput
                            placeholder="Email"
                            value={this.state.email}
                            onChangeText={(text => this.setState({ email: text }))}
                            ref={input => { this.emailTextInput = input }}
                            style={styles.inputText}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <View style={styles.iconTextInput}><FontAwesomeIcon icon={faKey} /></View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={styles.inputText}
                            value={this.state.password}
                            ref={input => { this.passwordtextInput = input }}
                            onChangeText={(text => this.setState({ password: text }))}
                        />
                    </View>


                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => {
                            { this.validate(this.state.email) };
                            { this.emailTextInput.clear() };
                            { this.passwordtextInput.clear() }
                        }}
                        >
                            <Text style={styles.loginText}>Se connecter</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info_container}>
                        <Text style={{ color: 'white' }}>Pas encore de compte ?</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Enregistrement') }}>
                            <Text style={styles.redirect_signin_text}>Enregistrez-vous</Text>
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
    main_container: {
        alignItems: 'center'
    },
    title_Screen: {
        marginTop: 80,
        fontSize: 35,
        color: 'white',
        marginBottom: 25
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
        width: 270,
        padding: 10,
    },
    iconTextInput: {
        padding: 10,
    },
    redirect_signin_text: {
        color: 'green',
        fontWeight: 'bold',
    },
    checkbox: {
        alignSelf: "center",
    },
    checkBoxText: {
        textAlign: 'right'
    },
    loginBtn: {
        width: 270,
        backgroundColor: '#577B43',
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: 'white',
        fontSize: 20
    },
    info_container: {
        alignItems: 'center',
        marginTop: 15
    },
    stepBack_container: {
        marginLeft: 25,
        marginTop: 25
    }
})

const mapStateToProps = (state) => {
    return {
        id: state.storeUserId.id,
        isLoggedIn: state.isLogged.isLoggedIn
    }
}

export default connect(mapStateToProps)(SignIn)