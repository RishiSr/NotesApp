import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Readnote = ({ data }) => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableHighlight>
                    <View style={{ paddingRight: 3, height: 40, width: 40, backgroundColor: "#4F4545", alignItems: 'center', justifyContent: "center", borderRadius: 10 }} >
                        <Image style={{ tintColor: "white", height: 25, width: 25 }} source={require('../assets/images/back.png')} />
                    </View>

                </TouchableHighlight>
                <TouchableOpacity>

                    <View style={{ height: 40, width: 45, backgroundColor: "#4F4545", alignItems: 'center', justifyContent: "center", borderRadius: 10 }} >
                        <Image style={{ tintColor: "white", height: 25, width: 25 }} source={require('../assets/images/update.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <Text


                style={{
                    paddingTop: 20,
                    paddingHorizontal: 15,
                    color: "#f5f5f5",
                    fontSize: 40,
                    fontFamily: 'Nunito',
                    fontWeight: "bold"


                }}> {data.texttitle}</Text>
            <Text


                style={{
                    paddingTop: 20,
                    paddingHorizontal: 15,
                    color: "#f5f5f5",
                    fontSize: 25,
                    fontFamily: 'Nunito-Medium'


                }}>
                {data.texttitle}
            </Text>



        </View>
    )
}

export default Readnote

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