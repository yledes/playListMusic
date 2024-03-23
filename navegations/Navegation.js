import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PlayListMusic  from '../screens/PlayListMusic'
import Favorites from '../screens/Favorites'
import Search from '../screens/Search'
import TopMusic from '../screens/TopMusic'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name = "PlayListMusic"
          component={PlayListMusic} 
          options={{title:"ListaMusica"}}       
        />
        <Tab.Screen
          name = "favorites"
          component={Favorites} 
          options={{title:"Favoritas"}}          
        />
        <Tab.Screen
          name = "search"
          component={Search}
          options={{title:"Buscar"}}           
        />
        <Tab.Screen
          name = "topMusic"
          component={TopMusic}  
          options={{title:"Top20"}}         
        />
        <Tab.Screen
          name = "Account"
          component={Account} 
          options={{title:"Cuenta"}}          
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}