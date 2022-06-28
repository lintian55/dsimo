import React from "react";
import { NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container,VStack,Input,Pressable,TextArea,IconButton,ZStack, PresenceTransition,Switch,Flex,Spacer} from 'native-base';
import { Entypo} from "@native-base/icons";


export default function AskScreen({navigation}){
    const [isOpen,setIsOpen] = React.useState(0);
    const [value,setValue] = React.useState("");
    const handleChange =(text)=>{
      const newText = text.replace(/[^\d]+/, '');
      setValue(newText);
    }


    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button size="xs">发布</Button>
        ),
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
         headerTitleAlign:"center",
      });
    }, [navigation]);

    return (
          <ZStack flex={1}>
            <Box width="100%" height="100%" bg="#fff">
                <VStack space={0} alignItems="center">
                  <Input variant="underlined" placeholder="请输入标题" />
                  <Input h={150} variant="unstyled" placeholder="请输入内容"/>   
                </VStack>

                <VStack space={5}>
                  <Pressable onPress={() => console.log("I'm Pressed")}>
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Entypo name='medium-with-circle' size={20} color='black'  style={{marginLeft:5,marginRight:5,marginTop:0}}/>
                        <Text fontSize="xs">赏金</Text>
                      </HStack>
                      <HStack>
                        <Input keyboardType="numeric" variant="underlined" value={value} height={8} width={60} onChangeText={handleChange} placeholder="价格" />
                        <Entypo name='chevron-right' size={20} color='black'  style={{marginTop:0}}/>
                      </HStack>
                    </HStack>   
                  </Pressable>

                  <Pressable onPress={() => setIsOpen(1)}>
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Entypo name='flickr-with-circle' size={20} color='black'  style={{marginLeft:5,marginRight:5,marginTop:0}}/>
                        <Text fontSize="xs">选择问题领域</Text>
                      </HStack>
                      <Entypo name='chevron-right' size={20} color='black'  style={{marginTop:0}}/>
                    </HStack>   
                  </Pressable>
                </VStack>
                <Box marginTop={5}>
                  <Flex direction="row">
            
                        <Text left={2}>允许旁听</Text>
                        <Spacer />
                        <Switch defaultIsChecked size="md" colorScheme="primary"/>
                  </Flex>
                </Box>            
            </Box>
           
              <Box width="100%" height="50%" top='50%'  bg="light.50" shadow={3} opacity={isOpen}>
                  <HStack left={3} top={2} space={3}>
                    <Button onPress={() => setIsOpen(0)} size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                  </HStack>
                  <HStack marginTop={2} left={3} top={2} space={3}>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                    <Button size="xs" variant="outline" colorScheme="light" >人工智能</Button>
                  </HStack>    
              </Box>

          </ZStack>
      );
}
