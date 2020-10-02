import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native'



/*
*
* Ici la fonction est bien hardcodé, ce n'est qu'un test
*
*
* */
class MyPlants extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                    <TextInput
                        placeholder="Rechercher..."
                        style={styles.rechercher}
                    ></TextInput>



                <ScrollView style={styles.scrollView_container}>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem_container}>
                        <Text style={styles.listItem_text}>Persil</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    rechercher: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        color: "#121212",
        height: 37,
        width: 307,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 18
    },
    scrollView_container: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 50,
    },
    listItem_container: {
        width: 290,
        height: 90,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "rgba(51,153,102,1)",
        marginBottom: 10,
    },
    listItem_text: {
        color: "#121212",
        marginTop: 39,
        marginLeft: 137
    }
})

export default MyPlants