import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
const ENV = process.env.TARO_ENV  //环境变量
export default class Event extends Component {
    state = {
        name: '张三',
        age: 18,
    }
    componentWillMount(){
        console.log('环境变量',ENV)
    }
    test(params1, params2, event) { //event永远是最后一个参数
        console.log(params1, params2, event)
        event.stopPropagation() //阻止冒泡事件
    }
    test1 = (e) => {
        e.stopPropagation() //阻止冒泡事件
    }
    test2(params, e) {
        console.log(params)
        e.stopPropagation() //阻止冒泡事件
    }
    render() {
        return (
            <View className='index'>
                <Button onClick={this.test.bind(this, this.state.name, this.state.age)}>测试事件</Button>
                <Button onClick={this.test1}>测试事件1</Button>
                <Button onClick={this.test2.bind(this, 2)}>测试事件2</Button>
            </View>
        )
    }
}