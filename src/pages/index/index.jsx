/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state={
    name:'hello world!!',
    text:'张三',
    age:18
  }

  componentWillMount () {
    console.log('第一次渲染之前执行 只执行一次')
  }

  componentDidMount () {
    console.log('第一次渲染之后执行 只执行一次') 
    this.setState({name:'hello china',text:'wang'})
  }

  componentWillUnmount () {
    console.log('卸载时执行 只执行一次') 
  }

  componentDidShow () {
    console.log('页面显示时触发')
  }//小程序专用

  componentDidHide () {
    console.log('页面隐藏时触发')
   }//小程序专用

   componentWillUpdate (nextProps, nextState) {
    console.log('更新前') 
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('更新后') 
  }
  shouldComponentUpdate(nextProps,nextState){
    //检查此次setState是否进行render调用
    if(nextState.text=='李四'){//多次setState提升render性能
      console.log('text等于李四--更新');
      return true;
    }else{
      console.log('text不等于李四 不更新的');
      return false;   
    }  
  }

  render () {
    return (
      <View className='index'>
        <Text>{this.state.name}</Text>
        <View><Text>{this.state.text}</Text></View>
      </View>
    )
  }
}
