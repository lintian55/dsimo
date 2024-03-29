import {
    DeviceEventEmitter
} from 'react-native';
const url = 'ws://127.0.0.1/ws';
let that = null;
 
export default class WebSocketClient {
    constructor() {
        this.ws = null;
        that = this;
    }
 
    /**
     * 获取WebSocket单例
     * @returns {WebSocketClient}
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new WebSocketClient();
        }
        return this.instance;
    }
 
    /**
     * 初始化WebSocket
     */
    initWebSocket() {
        try {
            //timer为发送心跳的计时器
            this.timer && clearInterval(this.timer);
            this.ws = new WebSocket(url);
            this.initWsEvent();
        } catch (e) {
            console.log('WebSocket err:', e);
            //重连
            this.reconnect();
        }
    }
 
    /**
     * 初始化WebSocket相关事件
     */
    initWsEvent() {
        //建立WebSocket连接
        this.ws.onopen = function () {
            console.log('WebSocket:', 'connect to server');
        };
 
        //客户端接收服务端数据时触发
        this.ws.onmessage = function (evt) {
            if (evt.data !== 'pong') {
                //不是心跳消息，消息处理逻辑
                console.log('WebSocket: response msg', evt.data);
                //接收到消息，处理逻辑...
                //更新广播
                DeviceEventEmitter.emit('pushEmitter', '');
 
            } else {
                console.log('WebSocket: response pong msg=', evt.data);
            }
        };
        //连接错误
        this.ws.onerror = function (err) {
            console.log('WebSocket:connect to server error',err);
            //重连
            that.reconnect();
        };
        //连接关闭
        this.ws.onclose = function () {
            console.log('WebSocket:', 'connect close');
            //重连
            that.reconnect();
        };
 
        //每隔15s向服务器发送一次心跳
        this.timer = setInterval(() => {
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                console.log('WebSocket:', 'ping');
                this.ws.sendMessage('ping');
            }
        }, 15000);
    }
 
    //发送消息
    sendMessage(msg) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            try {
                this.ws.send(msg);
            } catch (err) {
                console.warn('ws sendMessage', err.message);
            }
        } else {
            console.log('WebSocket:', 'connect not open to send message');
        }
    }
 
    //重连
    reconnect() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            //重新连接WebSocket
            //this.initWebSocket();
        }, 15000);
    }
}