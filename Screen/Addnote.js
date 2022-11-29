import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notedata } from '../ContextAPI';

const Addnote = ({ data, navigation, route }) => {
    const { setitems } = useContext(Notedata)
    // hey = "RIII"
    const [texttitle, settexttitle] = useState("");
    const [textbody, settextbody] = useState("");
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let currentDate = `${monthNames[month]} ${day},${year}`;

    const setdatainstorage = async () => {
        // await AsyncStorage.removeItem("SavedNews");
        const saveddata = await AsyncStorage.getItem("SavedNotes");
        if (saveddata == null) {
            const arr = [];
            const data = {
                "title": texttitle,
                "body": textbody,
                "date": currentDate,

            }
            arr.push(data);
            await AsyncStorage.setItem("SavedNotes", JSON.stringify(arr));


        }
        else {
            const arr = JSON.parse(saveddata);
            let index = arr.indexOf(data);
            if (index == -1) {
                const data = {
                    "title": texttitle,
                    "body": textbody,
                    "date": currentDate,

                }
                arr.push(data);
            } else {
                const datal = {
                    "title": texttitle,
                    "body": textbody,
                    "date": data.currentDate,

                }

                arr[index] = datal;


            }


            await AsyncStorage.removeItem("SavedNotes");

            await AsyncStorage.setItem("SavedNotes", JSON.stringify(arr));
            setitems(arr)

        }


        // This arrangement can be altered based on how we want the date's format to appear.

        // console.log(data)
        // const saveddata = await AsyncStorage.getItem("SavedNotes");



        // if (saveddata == null) {
        //     const arr = [];
        //     data.index = 0;
        //     arr.push(data)
        //     await AsyncStorage.setItem("SavedNotes", JSON.stringify(arr));

        // }
        // else {

        // const arr = JSON.parse(saveddata)
        //     data.index = arr.length;
        //     arr.push(data)
        //     await AsyncStorage.removeItem("SavedNotes");

        //     await AsyncStorage.setItem("SavedNotes", JSON.stringify(arr));



        // }

    }
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.goBack()}  >
                    <View style={{ paddingRight: 3, height: 40, width: 40, backgroundColor: "#4F4545", alignItems: 'center', justifyContent: "center", borderRadius: 10 }} >
                        <Image style={{ tintColor: "white", height: 25, width: 25 }} source={require('../assets/images/back.png')} />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={setdatainstorage} >

                    <View style={{ paddingRight: 3, height: 40, width: 70, backgroundColor: "#4F4545", alignItems: 'center', justifyContent: "center", borderRadius: 10 }} >
                        <Text style={styles.textsave} >Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder={((data)) ? data.title : "Title"}
                placeholderTextColor={"#929292"}

                style={{
                    paddingTop: 20,
                    paddingHorizontal: 15,
                    color: "#f5f5f5",
                    fontSize: 40,
                    fontFamily: 'Nunito',
                    fontWeight: "bold"


                }}
                onChangeText={newText => settexttitle(newText)}
                caretHidden={true} multiline={true} />
            <TextInput
                placeholder={((data)) ? data.body : "Type Something...."}
                placeholderTextColor={"#929292"}

                style={{
                    paddingTop: 20,
                    paddingHorizontal: 15,
                    color: "#f5f5f5",
                    fontSize: 25,
                    fontFamily: 'Nunito-Medium'


                }}
                onChangeText={newText => settextbody(newText)}
                caretHidden={true} multiline={true} />



        </View>
    )
}

export default Addnote

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",

    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textsave: {
        color: "#f5f5f5",
        fontFamily: 'Nunito-Semibold',
        fontWeight: "bold"
    }
})