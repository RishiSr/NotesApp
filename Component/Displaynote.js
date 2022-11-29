import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Notedata } from '../ContextAPI'

const colorArray = ["#554994", "#F675A8", "#F29393", "#FFCCB3", "#9ADCFF", "#FFB2A6", "#FF8AAE"]
const Displaynote = ({ data, num, navigation }) => {
    const { deleten, items, setitems } = useContext(Notedata)
    function deletenn() {
        deleten(data)
    }
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("AddNote") }} style={{ ...styles.displaybox, backgroundColor: colorArray[num], flexDirection: "row", justifyContent: "space-between" }} >
            <View>

                <Text style={styles.texttiledisplay} >
                    {data.title}
                </Text>
                <Text style={styles.textdatedisplay} >
                    {data.date}
                </Text>
            </View  >
            <TouchableOpacity style={{ width: 30, justifyContent: "center" }} onPress={deletenn}  >
                <Image style={{ height: 30, width: 30 }} source={require('../assets/images/delete.png')} />
            </TouchableOpacity>
        </TouchableOpacity >
    )
}

export default Displaynote

const styles = StyleSheet.create({
    displaybox: {
        borderWidth: 2,
        borderColor: "white",

        width: "100%",
        paddingHorizontal: 7,
        paddingBottom: 10,
        borderRadius: 10,
        marginVertical: 4



    },
    texttiledisplay: {
        fontFamily: 'Nunito-Semibold',
        fontSize: 30, color: "black",

    },
    textdatedisplay: {
        position: 'relative',
        bottom: -10,

        fontSize: 18,
        fontFamily: "Nunito-Semibold",

    }
})