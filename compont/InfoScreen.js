import React from "react";
import {Avatar, NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container,VStack,Input,Pressable,TextArea,IconButton,ZStack, PresenceTransition,Switch,Flex,Spacer, Center} from 'native-base';
import { Entypo} from "@native-base/icons";


export default function InfoScreen({navigation}){
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <IconButton  onPress={() => console.log("I'm Pressed")} icon={<Icon as={Entypo} name="chevron-left" />} borderRadius="full" _icon={{
              color: "black",
              size: "lg"
            }} _ios={{
              _icon: {
                size: "2xl"
              }
            }}  />
          ),
          title:'个人资料',
          headerTitleAlign:"center",
        });
      }, [navigation]);


    return (
      
      );
}
