
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import Dialog from './dialog'
import Img from '../../img/1.png'

export default class TestDialog extends Component {
    render() {
        return (<View className='index'>
            <Dialog option='text'><Text>我是Text</Text></Dialog>
            <Dialog option='img'><Image src={Img} /></Dialog>
            <Dialog option='button'><Button>我是Button</Button></Dialog>
        </View>)
    }
}