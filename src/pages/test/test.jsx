/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro'
import { View, Image,Button } from '@tarojs/components'
// import './index.less'
import Img from '../../img/1.png'
import './test.less'

export default class Test extends Component {

  config = {
    navigationBarTitleText: 'test页面'
  }
  clickHandle(){
    Taro.navigateTo({url:'/pages/index/index?name=张三'})
    // Taro.redirectTo({url:'/pages/index/index'})
  }

  getDom(){
    return(<Button>按钮Dom</Button>)
  }
  render () {
    let dom=null;
    dom = !true||<Button onClick={this.clickHandle}>跳转3</Button>
    return (
      <View className='index'>
          <Image className='img' src={Img} />
          {
            true?<Button onClick={this.clickHandle}>跳转1</Button>:null
          }
          {
            false||<Button onClick={this.clickHandle}>跳转2</Button>
          }
          {dom}
          {this.getDom()}
      </View>
    )
  }
}
