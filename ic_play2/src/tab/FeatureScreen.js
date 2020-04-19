import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,Image,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';

export class FeatureScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Feature" isHome={true} navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:55}}>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_1')
                }}>
                  <Image source={IMAGE.ICON_FEATURE_1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_2')
                }}>
                  <Image source={IMAGE.ICON_FEATURE_2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_3')
                }}>
                  <Image source={IMAGE.ICON_FEATURE_3} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_4')
                }}>
                  <Image source={IMAGE.ICON_FEATURE_4} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_5')
                }}>
                  <Image source={IMAGE.ICON_FEATURE_5} />
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>

          );
    }
}