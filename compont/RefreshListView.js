import React ,{Component}from 'react';
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
  ActivityIndicator,
  Text,
  FlatList,
  RefreshControl,
  Animated,
} from 'react-native';
const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];
export default class RefreshListView extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: CITY_NAMES,
            isLoading: false,
            scrollY:new Animated.Value(0),
        }
    }

    _renderItem(data) {
        return(
            <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
            </View>
            ) 
    }

    renderListHeader =()=>{
        return (
            <View style={{width:100 ,height:30}}>
                <Text>下拉刷新</Text>
            </View>
        )
    }

    loadData(refresh) {
        if (refresh) {
            this.setState({
                isLoading: true
            });
        }
        setTimeout(() => {
            let dataArray = [];
            if (refresh) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            });
        }, 2000);
    }

    genIndicator() {
        return(
            <View style={styles.indicatorContainer}>
                        <ActivityIndicator
                            style={styles.indicator}
                            size='large'
                            animating={true}
                        />
                         <Text>正在加载更多</Text>         
            </View>
            )     
     }

    render() {
       return (
            <View style={styles.container}>
                {/* <Animated.View
                        style={{
                            transform:[{
                                translateY:translateY
                            }],
                            zIndex:-10
                        }}
                    >
                        {this.renderListHeader()}
                </Animated.View> */}
                <FlatList
                    // onScroll={(event)=>{
                    //     let offsetY = event.nativeEvent.contentOffset.y;
                    //     this.state.scrollY.setValue(offsetY)
                    // }}
                    data={this.state.dataArray}
                    renderItem={(data => this._renderItem(data))}
                    // refreshing={this.state.isLoading}
                    // onRefresh={() => {
                    // this.loadData();
                    // }}
                    refreshControl={
                        <RefreshControl
                            title='Loading...'
                            colors={['red']}
                            refreshing={this.state.isLoading}
                            onRefresh={() => this.loadData(true)}
                            tintColor={'orange'}
                        />                     }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}
                /> 
            </View>         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 80,
        backgroundColor: '#169',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});