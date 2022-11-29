import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Home from './Screen/Home'
import Addnote from './Screen/Addnote'
import Readnote from './Screen/Readnote'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Notescontext from './ContextAPI'
import Displaynote from './Component/Displaynote'
'./ContextAPI'

const Stack = createNativeStackNavigator();



// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const App = () => {
  const data = {
    "title": "",
    "body": "",
    "date": "12"
  }
  return (
    <Notescontext>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddNote" component={Addnote} />
          <Stack.Screen name="Displaynote" component={Displaynote} />
        </Stack.Navigator>
      </NavigationContainer>
    </Notescontext>
  )
}

export default App

const styles = StyleSheet.create({})