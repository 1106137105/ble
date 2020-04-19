import React,{Component} from 'react';
import { Text, View ,Image,TouchableOpacity} from 'react-native';
import {IMAGE} from './constants/Image';

export class CustomHeader extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',height:50}}>
                <View style={{flex:1,justifyContent:'center'}}>
                  {
                    this.props.isHome?
                    <TouchableOpacity onPress={() => {
                      this.props.navigation.openDrawer();
                    }}>
                        <Image style={{height:30,width:30,resizeMode:'contain',marginLeft:10}} source={IMAGE.ICON_MENU}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() =>{
                      this.props.navigation.goBack();
                    }}>
                      <Image style={{height:25,width:25,marginLeft:10,resizeMode:'contain'}} source={IMAGE.ICON_BACK}/>
                    </TouchableOpacity>
                  }
                </View>
                <View style={{flex:1.5,justifyContent:'center'}}>
                  <Text style={{textAlign:'center'}}>{this.props.title}</Text>
                </View>
                <View style={{flex:1}}></View>
            </View>
          )
    }
}