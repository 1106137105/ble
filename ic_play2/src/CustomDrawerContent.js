import React,{Component} from 'react';
import { Text, View ,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {IMAGE} from './constants/Image';

export class CustomDrawerContent extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                    <View style={{height:150,justifyContent:'center',alignItems:'center'}}> 
                    <Image source={IMAGE.ICON_PROFILE} 
                    style={{height:120,width:120,borderRadius:60}}/>
                  </View>
                <ScrollView style={{marginLeft:10}}>
                <TouchableOpacity style={{marginTop:20}} onPress={() =>{
                  this.props.navigation.navigate('MenuTab')
                }}>
                  <Text>MenuTab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}} onPress={() =>{
                  this.props.navigation.navigate('Ic department introduce')
                }}>
                  <Text>Ic Department Introduce</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}} onPress={() =>{
                  this.props.navigation.navigate('Course')
                }}>
                  <Text>Course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}} onPress={() =>{
                  this.props.navigation.navigate('Union')
                }}>
                  <Text>Union</Text>
                </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity style={{marginTop:20}} onPress={() =>{
                  this.props.navigation.navigate('Login')
                }}>
                  <Text>Log out</Text>
                </TouchableOpacity>
            </SafeAreaView>
          )
    }
}