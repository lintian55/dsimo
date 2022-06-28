import React from "react";
import {Avatar, NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container,VStack,Input,Pressable,TextArea,IconButton,ZStack, PresenceTransition,Switch,Flex,Spacer, Center} from 'native-base';
import { Entypo} from "@native-base/icons";


export default function RoleScreen({navigation}){



    return (
        <Box flex={1}  bg="secondary.50" >
            <Box bg="primary.600" py="4" px="3" borderRadius="1" rounded="1" width="100%">         
                <HStack space={5}>
                    <Center>
                        <Avatar  size="lg" bg="cyan.500" source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}/>
                    </Center>
            
                    <Box justifyContent="center">
                        <VStack space="2">
                            <Text color="white" fontSize="xl">
                                test520
                            </Text>
                            <Text fontSize="sm" color="white">
                                等级:P10
                            </Text>
                            
                        </VStack>
                    </Box>
                    <Spacer/>
                    <Center>
                        <Text  fontSize="xl" color="coolGray.100">12.5</Text>
                    </Center>
                    <Box>
                    <IconButton top={-20}  onPress={() => console.log("I'm Pressed")} icon={<Icon as={Entypo} name="mail" />} borderRadius="full" _icon={{
                                color: "white",
                                size: "lg"
                            }} _ios={{
                                _icon: {
                                size: "2xl"
                                }
                            }}  />
                    </Box>
                   
                </HStack>
            </Box>
            <Box top={-10}  alignItems="center" >
                <Box  bg="coolGray.100" width="80%" alignItems="center">
                    <HStack space={1} alignItems="center" space={10}>
                        <Pressable onPress={() => console.log("I'm Pressed")} rounded="0" overflow="hidden" borderWidth="0"  maxW="100%" shadow="0" bg="coolGray.100" p="5" alignItems="center">
                                    <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:0,marginRight:5,marginTop:0}}/>
                                    <Text fontSize="xs">账单</Text>
                        </Pressable>
                        <Pressable onPress={() => console.log("I'm Pressed")} rounded="0" overflow="hidden" borderWidth="0"  maxW="100%" shadow="0" bg="coolGray.100" p="5" alignItems="center">
                        <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:0,marginRight:5,marginTop:0}}/>
                                    <Text fontSize="xs">提现</Text>
                        </Pressable>
                    </HStack>
                </Box>
            </Box>
            <VStack top={0}>
                <Pressable onPress={() => console.log("I'm Pressed")} rounded="2" overflow="hidden" borderWidth="0"  maxW="100%" shadow="1" bg="coolGray.100" p="5">
                    <HStack justifyContent="space-between">
                            <HStack>
                                <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:0,marginRight:5,marginTop:0}}/>
                                <Text fontSize="xs">实名信息</Text>
                            </HStack>
                            <Entypo name='chevron-right' size={20} color='black'  style={{marginTop:0}}/>
                    </HStack>     
                </Pressable>
                <Pressable onPress={() => console.log("I'm Pressed")} rounded="2" overflow="hidden" borderWidth="0"  maxW="100%" shadow="1" bg="coolGray.100" p="5">
                    <HStack justifyContent="space-between">
                            <HStack>
                                <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:0,marginRight:5,marginTop:0}}/>
                                <Text fontSize="xs">用户信息</Text>
                            </HStack>
                            <Entypo name='chevron-right' size={20} color='black'  style={{marginTop:0}}/>
                    </HStack>     
                </Pressable>
                <Pressable onPress={() => console.log("I'm Pressed")} rounded="2" overflow="hidden" borderWidth="0"  maxW="100%" shadow="1" bg="coolGray.100" p="5">
                    <HStack justifyContent="space-between">
                            <HStack>
                                <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:0,marginRight:5,marginTop:0}}/>
                                <Text fontSize="xs">APP分享</Text>
                            </HStack>
                            <Entypo name='chevron-right' size={20} color='black'  style={{marginTop:0}}/>
                    </HStack>     
                </Pressable>
                <Pressable onPress={() => console.log("I'm Pressed")} rounded="2" overflow="hidden" borderWidth="0"  maxW="100%" shadow="1" bg="coolGray.100" p="5">
                    <HStack justifyContent="space-between">
                            <HStack>
                                <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:0,marginRight:5,marginTop:0}}/>
                                <Text fontSize="xs">关于我们</Text>
                            </HStack>
                            <Entypo name='chevron-right' size={20} color='black'  style={{marginTop:0}}/>
                    </HStack>     
                </Pressable>

                <Pressable marginTop={50} onPress={() => console.log("I'm Pressed")} rounded="2" overflow="hidden" borderWidth="0"  maxW="100%" shadow="1" bg="coolGray.100" p="5">
                    <HStack justifyContent="center">
                                <Text fontSize="xs">退出</Text>

                    </HStack>     
                </Pressable>
            

            </VStack>
           
        </Box>
      );
}
