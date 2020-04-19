import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,StyleSheet,Image, TextInput} from 'react-native';

import {IMAGE} from '../constants/Image';
import {CustomForm} from '../index';

export class LoginScreen extends Component{
    render(){
        return (
          <View style={styles.rect}>
          <View style={styles.textColumn}>
            <Text style={styles.text}>Log in to React native.</Text>
            <View style={styles.rect2}>


              <View style={styles.iconFiller}></View>
              <View style={styles.rect3}>
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Resgister")}
                    style={styles.button}
                  >
                    <Text style={styles.text2}>Sign up</Text>
                  </TouchableOpacity>
                 


                </View>
              </View>
            </View>
            <Text style={styles.text3}>
              Phone number, email address, or username
            </Text>
            <Text style={styles.text4}>Password</Text>
            <TextInput
              placeholder=""
              secureTextEntry={true}
              style={styles.textInput}
            ></TextInput>
            <Text style={styles.text5}>Forgotten your password?</Text>
            <TextInput placeholder="" style={styles.textInput2}></TextInput>
          </View>
          <View style={styles.textColumnFiller}></View>
          <View style={styles.rect4}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HomeApp")}
              style={styles.button2}
            >
              <Text style={styles.text6}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        )
    }
}

const styles =StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 50,
    marginTop: 118,
    marginLeft: 17
  },
  rect2: {
    height: 98,
    backgroundColor: "#1c2a38",
    flexDirection: "row",
    marginTop: -168
  },
  icon: {
    color: "rgba(29,161,242,1)",
    fontSize: 40,
    marginLeft: 168,
    alignSelf: "center"
  },
  iconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect3: {
    width: 124,
    height: 50,
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    width: 85,
    height: 50,
    justifyContent: "center"
  },
  text2: {
    width: 66,
    height: 50,
    color: "#1da1f2",
    fontSize: 18,
    lineHeight: 50,
    alignSelf: "center",
    marginTop:30,
    marginLeft:70
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 25,
    marginTop: 13
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 14
  },
  text3: {
    color: "rgba(123,139,151,1)",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 102,
    marginLeft: 18
  },
  text4: {
    color: "rgba(123,139,151,1)",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 87,
    marginLeft: 17
  },
  textInput: {
    width: 339,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 2,
    marginLeft: 17
  },
  text5: {
    color: "#7b8b97",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 50,
    marginLeft: 82
  },
  textInput2: {
    width: 339,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: -220,
    marginLeft: 17
  },
  textColumn: {},
  textColumnFiller: {
    flex: 1
  },
  rect4: {
    height: 91
  },
  divider: {
    width: 360,
    height: 1
  },
  button2: {
    width: 109,
    height: 50,
    backgroundColor: "#1da1f2",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 240
  },
  text6: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 20,
    alignSelf: "center"
  }
})