import React from "react";
import {Avatar, NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container,VStack,Input,Pressable,TextArea,IconButton,ZStack, PresenceTransition,Switch,Flex,Spacer, Center} from 'native-base';
import { Entypo} from "@native-base/icons";

///身份证
export default function BankScreen({navigation}){
    
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
          title:'实名认证',
          headerTitleAlign:"center",
        });
      }, [navigation]);


    return (
        <Box w="100%" top={5}>
            <Center>
                <VStack space={2} w="90%">
                <Input w="100%"  placeholder="姓名" />
                <Input w="100%"  placeholder="身份证"/>
                <Button size="sm" colorScheme="secondary">
                    确定
                </Button>
                </VStack>
            </Center>
        </Box>
      );
}
