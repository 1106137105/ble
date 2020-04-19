import React,{Component} from 'react';
import { Text, View ,SafeAreaView,Image,StyleSheet,ScrollView,Animated,Dimensions} from 'react-native';
import {CustomHeader,BackgroundCar} from '../index';


const images=[
  "https://ic.nkust.edu.tw/var/file/75/1075/pictures/519/m/mczh-tw400x400_small14858_858429135383.jpg",
  "https://ic.nkust.edu.tw/var/file/75/1075/pictures/843/m/mczh-tw400x400_small14857_42380335348.jpg",
  "https://ic.nkust.edu.tw/var/file/75/1075/pictures/89/m/mczh-tw400x400_small14856_929717235273.jpg",
  "https://ic.nkust.edu.tw/var/file/75/1075/pictures/433/m/mczh-tw400x400_small14855_666275635191.jpg",
  "https://ic.nkust.edu.tw/var/file/75/1075/pictures/323/m/mczh-tw400x400_small14854_219962034816.jpg"
];

export class ClassScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
              <View>
              <BackgroundCar images={images}/>
              </View>
              
            </View>
          );
    }
}


const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
})