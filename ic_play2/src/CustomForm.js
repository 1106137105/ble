import React,{Component} from 'react';
import { TextInput, View ,Image,TouchableOpacity,StyleSheet} from 'react-native';
import {IMAGE} from './constants/Image';

export class CustomForm extends Component{
    render(){
        return(
            <View >
                <TextInput style={styles.inputbox} placeholder="username" placeholderTextColor='#ffffff'/>
                <TextInput style={styles.inputbox} placeholder="password" placeholderTextColor='#ffffff'/>
            </View>
          )
    }
}

const styles= StyleSheet.create({
    inputbox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        height:35,
        paddingHorizontal:25,
        fontSize:16,
        color :'#ffffff',
        marginVertical:10,
    }
})