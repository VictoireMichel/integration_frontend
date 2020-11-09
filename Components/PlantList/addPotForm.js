import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { postPotDatatoApi } from "../../PostDataToAPI/postDataToApi"

class addPotForm extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            idPlant: null,
            potName: null,
            needWater: 0,
            dayCount: 0,
            userId: 1

        };
    }

    componentDidMount () {
        this.setState({
            idPlant : this.props.route.params,
        });
    }


    render() {
        const radio_props = [
            {label: 'Mode apprentissage', value: 0 },
            {label: 'Mode automatique', value: 1 }
        ];

        return (
            <ScrollView style={styles.container_out}>
                <View style={styles.container_in}>

                    <View style={styles.main_container}>
                        <Text style={styles.question_text}>Comment voulez-vous nommer votre pot ?</Text>
                    </View>

                    <View style={styles.container_input}>
                        <TextInput
                            name="potName"
                            placeholder="Nom du pot"
                            style={styles.input_text}
                            onChangeText={potName => this.setState({potName})}
                            value={this.state.potName}
                        />
                    </View>

                    <View style={styles.main_container}>
                        <Text style={styles.question_text}>Quel mode désirez-vous choisir ?</Text>
                    </View>

                    <View style={styles.main_container}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {console.log(value)}}
                        />
                    </View>

                    <View style={styles.main_container}>
                        <TouchableOpacity style={styles.validateBtn} onPress={() => { postPotDatatoApi(this.state.potName,this.state.needWater,this.state.dayCount,this.state.idPlant,this.state.userId), this.props.navigation.goBack(), this.props.navigation.goBack(), this.props.navigation.navigate('Home')}}>
                            <Text style={styles.text_button}>Valider</Text>
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
    input_text: {
        fontSize: 18,
        backgroundColor: '#fff',
        color: '#424242',
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
    question_text:{
        fontSize:15
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    text_button: {
        color: "white",
        fontSize: 18
    },
    validateBtn:{
        width:270,
        backgroundColor:'#588B43',
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:30
    }
})

export default addPotForm