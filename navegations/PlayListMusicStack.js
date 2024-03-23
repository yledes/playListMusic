import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PlayListMusic from '../screens/PlayListMusic'


const Stack = createStackNavigator()

export default function PlayListMusicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "playListMusic"
        component={PlayListMusic}
        options={{ title: "ListaMusica" }}
      />
    </Stack.Navigator>
  
  )
}