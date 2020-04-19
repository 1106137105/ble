import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,Image} from 'react-native';
import {CustomHeader,HeaderX} from '../index';
import {IMAGE} from '../constants/Image';

export class HomeScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Home!</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() =>{
                  this.props.navigation.navigate('HomeDetail')
                }}>
                  <Image source={IMAGE.ICON_CLASS}/>
                  <Text>Go to Home Detail</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}