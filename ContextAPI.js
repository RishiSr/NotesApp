import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Notedata = createContext();

const Notescontext = ({ children }) => {

    const [items, setitems] = useState([])
    useEffect(() => {
        Shownotes();


    }, []);




    const Shownotes = async () => {
        const saveddata = await AsyncStorage.getItem("SavedNotes");
        const arr = JSON.parse(saveddata);

        setitems(arr)


    }
    const deleten = async (e) => {
        const index = items.indexOf(e);


        let arr = items;
        (arr.splice(index, 1))

        await AsyncStorage.removeItem("SavedNotes");

        await AsyncStorage.setItem("SavedNotes", JSON.stringify(arr));
        setitems(arr);
        Shownotes();

    }

    return (
        <Notedata.Provider value={{ items, setitems, deleten }} >
            {children}
        </Notedata.Provider>
    )
}

export default Notescontext

const styles = StyleSheet.create({})