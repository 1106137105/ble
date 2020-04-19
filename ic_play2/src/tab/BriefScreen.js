import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index';

export class BriefScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Brief" isHome={true} navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                  
                </Text>
              </View>
            </SafeAreaView>
          );
    }
}