import React from "react";
import {Avatar, NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container,VStack,Input,Pressable,TextArea,IconButton,ZStack, PresenceTransition,Switch,Flex,Spacer, Center} from 'native-base';
import { Entypo} from "@native-base/icons";

///身份证
export default function AplayScreen({navigation}){
    
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
          title:'提现',
          headerTitleAlign:"center",
        });
      }, [navigation]);


    return (
        <Box w="100%" top={5}>
            <Center>
                <VStack space={2} w="90%">
                <Input w="100%"  placeholder="支付宝账号" />
                <Text fontSize="xs" color="danger.400">注意:支付宝账号姓名需要与实名一致</Text>
                <Input w="100%"  placeholder="提款金额"/>
                <Text fontSize="xs" color="success.800">可提金额:12.0</Text>
                <Button size="sm" colorScheme="secondary">
                    确定
                </Button>
                </VStack>
            </Center>
        </Box>
      );
}
