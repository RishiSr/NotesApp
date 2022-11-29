import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, ViewBase } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler'
import Displaynote from '../Component/Displaynote'
import { FlatGrid } from 'react-native-super-grid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notedata } from '../ContextAPI';

const Home = ({ navigation }) => {
    const { items, setitems } = useContext(Notedata)
    const [searchwidth, setsearchwidth] = useState(45);
    const [searchtext, setsearchtext] = useState("");
    const [flag, setflag] = useState(1)
    useEffect(() => {

        Shownotes();


    }, [])
    useEffect(() => {

        canclesearch();

    }, [flag])
    useEffect(() => {

        console.log(searchtext)
        if (searchtext == "") {
            canclesearchontext()
        }
    }, [searchtext])


    const texti = useRef(null)
    const canclesearch = async () => {
        if (flag == 1) {
            setsearchwidth(45);
            setsearchtext("");
            const saveddata = await AsyncStorage.getItem("SavedNotes");
            const arr = JSON.parse(saveddata);

            setitems(arr)

        }
    }
    const canclesearchontext = async () => {

        setsearchwidth(45);
        // setsearchtext("");
        const saveddata = await AsyncStorage.getItem("SavedNotes");
        const arr = JSON.parse(saveddata);

        setitems(arr)

    }

    const Shownotes = async () => {
        const saveddata = await AsyncStorage.getItem("SavedNotes");
        const arr = JSON.parse(saveddata);

        setitems(arr)
        // const data = {
        //     "title": texttitle,
        //     "body": textbody,
        //     "date": currentDate,

        // }
        // setitems([{ "Title": "Rishi", "Body": "HJ", "CurrentDate": "fj" }])
        // console.log(items)

    }
    useEffect(() => {
        if (flag == 0) {
            //    for(let i=0;i<items.length;i++){
            //     if(items[i]==)
            //    }
            if (searchtext) {

                setitems(items.filter((e) => (e.title.substr(0, searchtext.length) == searchtext)))
            }

        }


    }, [searchtext])

    const onSearchtab = (text) => {
        setsearchtext(text)
        console.log(searchtext)



    }




    return (


        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.headerText} >Notes</Text>


                <View style={{ width: searchwidth, height: 45, borderRadius: 8, backgroundColor: "#4F4545" }} >
                    <TextInput value={searchtext} caretHidden={true} style={{ color: "white", fontSize: 20 }} onChangeText={(newtext) => { setsearchtext(newtext) }} />

                    <TouchableOpacity onPress={() => { setsearchwidth(280); setflag(!flag); }} style={{ width: 45, justifyContent: "center", height: 45, position: "absolute", right: 2 }}>
                        {flag && <Image style={{ tintColor: "white", height: 28, width: 28, position: "absolute", right: 8 }} source={require("../assets/images/searh.png")} />}
                        {!flag && <Image style={{ tintColor: "white", height: 28, width: 28, position: "absolute", right: 8 }} source={require("../assets/images/cancle.png")} />}

                    </TouchableOpacity>
                </View>
            </View>



            {/* data={items}
``
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (

                    < Displaynote deleten={deleten} data={item} parent={items} setparent={setitems} num={Math.floor(Math.random() * 6)} />
              */}
            <ScrollView style={{ height: "100%" }}>
                {items && items.map((item, index) => {
                    return (
                        < Displaynote data={item} num={Math.floor(Math.random() * 6)} />
                    )
                })}
            </ScrollView>
            <TouchableOpacity onPress={() => { navigation.navigate("AddNote") }}
                style={styles.floatbutton}
            >
                <Image style={{ height: 30, width: 30, tintColor: "white" }} source={require("../assets/images/Add.png")} />
            </TouchableOpacity>



        </View >


    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingTop: 10
    },
    headerText: {
        color: "#f5f5f5",
        fontFamily: "Nunito-SemiBold",
        fontSize: 30,

    },
    floatbutton: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 70,
        backgroundColor: 'black',
        borderRadius: 90,
        elevation: 1
    }
})