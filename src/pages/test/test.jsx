/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro'
import { View,Text, Image,Button,Br } from '@tarojs/components'
// import './index.less'
import Img from '../../img/1.png'
import './test.less'

export default class Test extends Component {

  config = {
    navigationBarTitleText: 'test页面'
  }
  state={
    list:[
      {id:1,name:'项目1'},
      {id:2,name:'项目2'},
      {id:3,name:'项目3'},
      {id:4,name:'项目4'},
      {id:5,name:'项目5'},
      {id:6,name:'项目6'},
      {id:7,name:'项目7'}
    ]
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
    let {list}=this.state
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
          {
            list.map((item)=>{
            return (<View key={item.id}><Text>{item.name}</Text></View>)
            })
          }
      </View>
    )
  }
}
