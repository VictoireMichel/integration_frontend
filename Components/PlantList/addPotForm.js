import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { postPotDatatoApi } from "../../SendDataToAPI/postDataToApi"
import { updateLearningMode } from "../../SendDataToAPI/updateLearningMode"

class addPotForm extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            idPlant: null,
            potName: null,
            needWater: 0,
            dayCount: 0,
            learningMode: 0,
            userId: 18

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
                        <Text style={styles.potName_text}>Comment voulez-vous nommer votre pot ?</Text>
                    </View>


                        <TextInput
                            name="potName"
                            placeholder="Nom du pot"
                            style={styles.inputText}
                            onChangeText={potName => this.setState({potName})}
                            value={this.state.potName}
                        />


                    <View style={styles.main_container}>
                        <Text style={styles.mode_text}>Quel mode désirez-vous choisir ?</Text>
                    </View>

                    <View style={styles.main_container}>
                        <RadioForm
                            labelStyle={{fontSize: 18}}
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {this.setState({
                                learningMode: value
                                }
                            )}}
                        />
                    </View>

                    <View style={styles.main_container}>
                        <TouchableOpacity style={styles.validateBtn} onPress={() => {postPotDatatoApi(this.state.potName,this.state.needWater,this.state.dayCount,this.state.idPlant,this.state.userId), updateLearningMode(this.state.userId, this.state.learningMode), this.props.navigation.goBack(), this.props.navigation.goBack(), this.props.navigation.navigate('Home')}}>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container_in: {
        backgroundColor: 'white',
        height: 550,
        marginTop: '10%',
        marginBottom: '10%',
        width: 350,
        marginRight: 'auto',
        marginLeft: 'auto',

        elevation: 5,
        borderRadius:10,
    },
    potName_text: {
        fontSize: 17,
    },
    inputText: {
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
    mode_text:{
        fontSize:18
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