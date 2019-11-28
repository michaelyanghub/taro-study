
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'

export default class Dialog extends Component {
    render() {
        return (<View className='index'>
            父组件---
            子组件属性：
            {this.props.option}；
            子组件：
            {
                this.props.children
            }；
        </View>)
    }
}