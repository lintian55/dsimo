import React from "react";
import { Animated} from 'react-native'
import { NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container,VStack,Input,Pressable,TextArea,IconButton,ZStack, PresenceTransition,Switch,Flex,Spacer,Center} from 'native-base';
import { Entypo} from "@native-base/icons";


export default function RoomScreen({navigation}){
    const [sidle,setSidle] = React.useState(100);

   

    // const intervalID = setInterval(() => {
    //     sid  = sid-1;
    //     setSidle(sid)
    //     //clearInterval(intervalID);
    // }, 1000)
    // React.useEffect(() => {
    //         Animated.timing(
    //             sidle, // 动画中的变量值
    //             {
    //                 toValue: 1, // 透明度最终变为1，即完全不透明
    //                 duration: 10000 // 让动画持续一段时间
    //             }
    //         ).start() // 开始执行动画
    //     }, [sidle])

        React.useEffect(() => {
            sid = 100;
            const intervalID = setInterval(() => {
                sid  = sid-1;
                console.log(sid)
                setSidle(sid)
                if(sid <= 0)
                {
                    clearInterval(intervalID);
                }    
            }, 100)
        }, [])


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
        title:' ',
        headerTitleAlign:"center",
      });
    }, [navigation]);

    return (
            <Box width="100%" height="100%" bg="light.300">
               <Center width="100%">
                    <PresenceTransition width="100%" visible={true} initial={{
                        opacity: 0,
                        scale: 0
                        }} animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 250
                            }
                     }}>
                         <Center>
                            <Box w="99%"  mt="0" bg="light.100" rounded="2" top={1}>
                                <Flex marginTop={2} marginRight={2} space={3} direction="row">
                                    <Text left={2}>标题</Text>
                
                                </Flex>
                                <Text left={2} fontSize="14">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Text>
                                <Flex marginBottom={2} marginTop={2} marginRight={2} space={3} direction="row">
                                    <Text top={2} left={2} fontSize="10">正在抢单人数:10</Text>
                                    <Spacer />
                                    <Button size="xs">抢单</Button>
                                </Flex>
                            </Box>
                        </Center>
                        </PresenceTransition>
                </Center>
                <Fab renderInPortal={false} shadow={2} right="45%" bottom={5} size="sm" icon={<Icon color="white" as={Entypo} name="plus" size="4" />} />
                <HStack justifyContent="flex-end">            
                    <Box  width={sidle+"%"} bg="primary.400" height={1}></Box>
                </HStack>
            </Box>   
      );
}
