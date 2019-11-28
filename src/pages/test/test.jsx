/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
// import './index.less'

export default class Test extends Component {

  config = {
    navigationBarTitleText: 'test页面'
  }
  clickHandle(){
    Taro.navigateTo({url:'/pages/index/index?name=张三'})
    // Taro.redirectTo({url:'/pages/index/index'})
  }

  render () {
    return (
      <View className='index'>
          <Button onClick={this.clickHandle}>跳转</Button>
      </View>
    )
  }
}
