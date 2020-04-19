import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index';

export class TeacherScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64'}}>
              <CustomHeader title="Teacher" isHome={true} navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Teacher!</Text>
              </View>
            </SafeAreaView>
          );
    }
}