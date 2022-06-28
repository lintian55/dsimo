/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
   Image,
   Button,
   TouchableHighlight,
 } from 'react-native';

 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import { Entypo} from "@native-base/icons";
 import { Text,NativeBaseProvider } from 'native-base';
 import RefreshListView from './compont/RefreshListView';
 import HelpScreen from './compont/HelpScreen';
 import AskScreen from './compont/AskScreen';
import RoomScreen from './compont/RoomScreen';
import RoleScreen from './compont/RoleScreen';
import BankScreen from './compont/BankScreen';
import AplayScreen from './compont/AplayScreen';
import WebSocketClient from './compont/WebSocketClient';
import AnoScreen from './compont/AnoScreen';

 
 const AuthContext = React.createContext();
 
 
 function SettingsScreen() {
   const Tab = createMaterialTopTabNavigator();
   return (
     <Tab.Navigator
     style={{top:0}}
     screenOptions={{
       tabBarLabelStyle: { fontSize: 10 },
       tabBarItemStyle: { width: 100 },
       tabBarStyle: { backgroundColor: 'white' },
       tabBarScrollEnabled:true,
       tabBarPressColor: 'white',
       tabBarIndicator:()=>{
         return <View/>
       },
     }}
   >
     <Tab.Screen name="推荐" component={HelpScreen} />
     <Tab.Screen name="游戏" component={SecondScreen} />
     <Tab.Screen name="人工智能" component={SecondScreen} />
     <Tab.Screen name="数据库" component={SecondScreen} />
     <Tab.Screen name="分布式" component={SecondScreen} />
     <Tab.Screen name="开发语言" component={SecondScreen} />
   </Tab.Navigator>
   );
 }
 
 function HomeScreen({navigation}) {
    const SecondTab = createMaterialTopTabNavigator();
    return (
      <SecondTab.Navigator
      style={{top:0}}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 8 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarScrollEnabled:true,
        tabBarPressColor: 'white',
        tabBarIndicator:()=>{
          return <View/>
        },
      }}
    >
      <SecondTab.Screen name="推荐" component={SecondScreen} />
      <SecondTab.Screen name="游戏" component={SecondScreen} />
      <SecondTab.Screen name="人工智能" component={SecondScreen} />
      <SecondTab.Screen name="数据库" component={SecondScreen} />
      <SecondTab.Screen name="分布式" component={SecondScreen} />
      <SecondTab.Screen name="开发语言" component={SecondScreen} />
    </SecondTab.Navigator>
    );
 }

 function SecondScreen({navigation}){
    return(
      <View></View>
    );
 }

 
 
 const tab = createBottomTabNavigator();
 
 function LoginScreen() {
   return (
     <tab.Navigator
     screenOptions={{
       activeTintColor: '#4BC1D2',
       tabBarStyle: {backgroundColor: 'red',},
       tabBarItemStyle:{backgroundColor: 'white',},
     }}
     >
      
        <tab.Screen name='首页' component={SettingsScreen} options={{
        tabBarIcon: () => (<Entypo name='home' size={23} color='black'  style={{marginLeft:0}}/>),
         headerShown:false
         }}/> 
        <tab.Screen name='开始' component={HomeScreen} options={{
         tabBarIcon: () => (<Entypo name='vimeo-with-circle' size={45} color='black'  style={{marginTop:-15}}/>),
         headerShown:false
        }}/>
        <tab.Screen name='我的' component={HomeScreen} options={{
         tabBarIcon: () => (<Entypo name='user' size={23} color='black'  style={{marginLeft:0}}/>),
         headerShown:false
         }}/> 
     </tab.Navigator>
   );
 }
 
 function RegitestScreen() {
   return (
     <View>
       <Text>RegitestScreen!</Text>
     </View>
   );
 }
 
 
 
 const Stack = createNativeStackNavigator();
 
 const App: () => Node = () => {

  
  React.useEffect(() => {
    WebSocketClient.getInstance().initWebSocket();
}, [])

   return (
      <NativeBaseProvider>
        <NavigationContainer >
              <Stack.Navigator>
                <Stack.Screen name='发布' component={AnoScreen} options={{headerShown:true}}></Stack.Screen> 
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} ></Stack.Screen>   
              </Stack.Navigator>
        </NavigationContainer>
       </NativeBaseProvider>
   );
 }
 
 export default App;
 