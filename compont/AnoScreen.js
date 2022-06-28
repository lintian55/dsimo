import React from "react";
import {View,Button} from 'react-native'
import AgoraUIKit from 'agora-rn-uikit';


export default function AnoScreen({navigation}){
    
    const [videoCall, setVideoCall] = React.useState(true);
    const connectionData = {
      appId: 'ff3bc38185a64713931015b9df010ccd',
      channel: '123',
    };
    const rtcCallbacks = {
      EndCall: () => setVideoCall(false),
    };
    return videoCall ? (
      <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
    ) : (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button
          onPress={()=>setVideoCall(true)}
          title="Enter Room"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
     </View>
    );
}
