import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import {CustomHeader} from '../index';

export class IcDepartmentIntroduceScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 ,backgroundColor:'#455a64'}}>
            <CustomHeader title="Ic Department Introduce" navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{marginTop:20,width:300,backgroundColor:'#1c313a',borderRadius:25,paddingVertical:12,}} onPress={() =>{
                this.props.navigation.navigate('Resgister')
              }}>
                <Text style={styles.touchtext}>設備資源</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          );
    }
}
const styles =  StyleSheet.create({
  touchtext:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
})