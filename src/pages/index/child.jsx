import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';


class Child extends Component{
    componentWillReceiveProps(nextProps){
        // this.props.flag!=nextProps.flag;
        console.log('props属性变化了'+nextProps.name);
    }
    cl(){
        // eslint-disable-next-line taro/this-props-function
        this.props.test();
    }
    render(){
        let {name,obj}=this.props;
        return(
        <View onClick={this.cl} >
            我是子节点{name+"----"+obj.key[0].name}
        </View>
        ) 
    } 
}
Child.defaultProps={
    obj:{
        key:[
            {name:'aaa'}
        ]
    }
}
export default Child;