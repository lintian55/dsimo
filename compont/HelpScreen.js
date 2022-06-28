import React from "react";
import { NativeBaseProvider, Text, Box,Fab,Icon,HStack,Button,Container} from 'native-base';
import { Entypo} from "@native-base/icons";

export default function HelpScreen(){

    return (
          <Box flex={1} bg="#fff" alignItems="center" justifyContent="flex-end">
              <Container flex={6} justifyContent="center">
                <Text>你行你上啊！</Text>
              </Container>
              <HStack flex={1} bottom={0}>
                    <Button right={5} height={55}  borderRadius={50} onPress={() => console.log("hello world")}>提问</Button>
                    <Button left={5} height={55}  borderRadius={50} onPress={() => console.log("hello world")}>解答</Button>
              </HStack>
           
          </Box>
      );
}
