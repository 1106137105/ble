import React, { useEffect, Component } from 'react';
import { Image, StyleSheet, Alert, DeviceEventEmitter, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from './src';
import { HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail, ClassScreen, TeacherScreen, WishScreen, GoalScreen, FeatureScreen, BriefScreen, MemberScreen, EventScreen, Feature_1Screen, Feature_2Screen, Feature_3Screen, Feature_4Screen, Feature_5Screen } from './src/tab';
import { LoginScreen, ResgisterScreen } from './src/auth';
import { IMAGE } from './src/constants/Image';

import Kontakt, { KontaktModule } from 'react-native-kontaktio';

const {
  connect,
  configure,
  disconnect,
  isConnected,
  startScanning,
  stopScanning,
  restartScanning,
  isScanning,
  setBeaconRegion,
  setBeaconRegions,
  getBeaconRegions,
  setEddystoneNamespace,
  IBEACON,
  EDDYSTONE,
  scanMode,
  scanPeriod,
  activityCheckConfiguration,
  forceScanConfiguration,
  monitoringEnabled,
  monitoringSyncInterval,
} = Kontakt;



/////////beacon程式碼////////////////
//區域判斷式
const region1 = {
  identifier: 'USBeacon',
  uuid: '1D5F5874-9406-4D00-9E6F-D519D307D986',
  major: 1,
  minor: 1
};
const region2 = {
  identifier: 'USBeacon',
  uuid: '1D5F5874-9406-4D00-9E6F-D519D307D986',
  major: 1,
  minor: 2
};



export default class Test extends Component {
  state = {
    scanning: false,
    beacons: [],
    eddystones: [],
    statusText: null,
  };

  componentDidMount() {
    connect(
      'MY_KONTAKTIO_API_KEY',
      [IBEACON, EDDYSTONE],
    )
      .then(() => setBeaconRegions([region1, region2]))
      .then(() => setEddystoneNamespace())
      .then(() => startScanning())
      .catch(error => console.log('error', error));

    // beacon監聽
    DeviceEventEmitter.addListener(
      //掃到
      'beaconDidAppear',
      ({ beacon: newBeacon, region }) => {
        console.log('beaconDidAppear', newBeacon, region);

        this.setState({
          beacons: this.state.beacons.concat(newBeacon)
        });
      }
    );
    DeviceEventEmitter.addListener(
      //beacon參數變動
      'beaconsDidUpdate',
      ({ beacons: updatedBeacons, region }) => {
        console.log('beaconsDidUpdate', updatedBeacons, region);
        ////rssi轉換成距離(公尺)////
        var power = (Math.abs(updatedBeacons[0].rssi) - 60) / (10 * 3.3);
        console.log('距離為: '+ Math.pow(10, power) + '公尺')
        //////////////////////////
        const { beacons } = this.state;
        updatedBeacons.forEach(updatedBeacon => {
          const index = beacons.findIndex(beacon =>
            this._isIdenticalBeacon(updatedBeacon, beacon)
          );
          this.setState({
            beacons: beacons.reduce((result, val, ind) => {
              // replace current beacon values for updatedBeacon, keep current value for others
              ind === index ? result.push(updatedBeacon) : result.push(val);
              return result;
            }, [])
          })
        });
      }
    );

    // 區域條件監聽 listeners
    DeviceEventEmitter.addListener(
      'regionDidEnter',
      ({ region }) => {
        //如果進入的區域的minor=beacon_1的minor
        if(region.minor === region1.minor){
          Alert.alert(
            '你好阿1',
            '你進到beacon1_111的區域了',
            [{ text: '好喔1', onPress: () => console.log('OK_1 Pressed') }],
            { cancelable: false },
          );
        }else if(region.minor === region2.minor){ //如果進入的區域的minor=beacon_2的minor
          Alert.alert(
            '你好阿2',
            '你進到beacon1_222的區域了',
            [{ text: '好喔2', onPress: () => console.log('OK_2 Pressed') }],
            { cancelable: false },
          );
        }
        console.log('regionDidEnter', region);
      }
    );
    DeviceEventEmitter.addListener(
      'regionDidExit',
      ({ region }) => {
         //如果離開的區域的minor=beacon_1的minor
        if(region.minor === region1.minor){
          Alert.alert(
            '掰掰啦1',
            '你離開beacon1_111的區域了',
            [{ text: '好欸1', onPress: () => console.log('bye_1 Pressed') }],
            { cancelable: false },
          );
        }else if(region.minor === region2.minor){   //如果離開的區域的minor=beacon_1的minor
          Alert.alert(
            '掰掰啦2',
            '你離開beacon1_222的區域了',
            [{ text: '好欸2', onPress: () => console.log('bye_2 Pressed') }],
            { cancelable: false },
          );
        }
      }
    );
  }
  componentWillUnmount() {
    // Disconnect beaconManager and set to it to null
    disconnect();
    DeviceEventEmitter.removeAllListeners();
  }

  /**
   * Helper function used to identify equal beacons
   */
  _isIdenticalBeacon = (b1, b2) => (
    (b1.identifier === b2.identifier) &&
    (b1.uuid === b2.uuid) &&
    (b1.major === b2.major) &&
    (b1.minor === b2.minor)
  );

  render() {
    const { scanning, beacons } = this.state;
    console.disableYellowBox = true;
    return (
      <>
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="Login">
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
          <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
          <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
        </StackApp.Navigator>
      </NavigationContainer>
    </>
    );
  }
}
//////////////beacon程式碼/////////////


const Tab = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();
const Tab3 = createBottomTabNavigator();
const Tab4 = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();
function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Settings" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingsScreenDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )
}

const StackFeature = createStackNavigator();
function FeatureStack() {
  return (
    <StackFeature.Navigator initialRouteName="Feature">
      <StackFeature.Screen name="Feature" component={FeatureScreen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_1" component={Feature_1Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_2" component={Feature_2Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_3" component={Feature_3Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_4" component={Feature_4Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_5" component={Feature_5Screen} options={navOptionHandler} />
    </StackFeature.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.ICON_HOME
              : IMAGE.ICON_HOME_BLACK
          } else if (route.name === 'Settings') {
            iconName = focused
              ? IMAGE.ICON_SETTINGS
              : IMAGE.ICON_SETTINGS_BLACK
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  )
}

function Tab2Navigator() {
  return (
    <Tab2.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Hope') {
            iconName = focused
              ? IMAGE.ICON_WISHLIST_WHITE
              : IMAGE.ICON_WISHLIST
          } else if (route.name === 'Class') {
            iconName = focused
              ? IMAGE.ICON_CLASS_WHITE
              : IMAGE.ICON_CLASS
          }
          else if (route.name === 'Teacher') {
            iconName = focused
              ? IMAGE.ICON_TEACHER_WHITE
              : IMAGE.ICON_TEACHER
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={WishScreen} />
      <Tab2.Screen name="Class" component={ClassScreen} />
      <Tab2.Screen name="Teacher" component={TeacherScreen} />
    </Tab2.Navigator>
  )
}

function Tab3Navigator() {
  return (
    <Tab3.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Goal') {
            iconName = focused
              ? IMAGE.ICON_GOAL_WHITE
              : IMAGE.ICON_GOAL
          } else if (route.name === 'Feature') {
            iconName = focused
              ? IMAGE.ICON_FEATURE_WHITE
              : IMAGE.ICON_FEATURE
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab3.Screen name="Goal" component={GoalScreen} />
      <Tab3.Screen name="Feature" component={FeatureStack} />
    </Tab3.Navigator>
  )
}

function Tab4Navigator() {
  return (
    <Tab4.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Brief') {
            iconName = focused
              ? IMAGE.ICON_BRIEF_WHITE
              : IMAGE.ICON_BRIEF
          } else if (route.name === 'Event') {
            iconName = focused
              ? IMAGE.ICON_EVENT_WHITE
              : IMAGE.ICON_EVENT
          }
          else if (route.name === 'Member') {
            iconName = focused
              ? IMAGE.ICON_MEMBER_WHITE
              : IMAGE.ICON_MEMBER
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab4.Screen name="Brief" component={BriefScreen} />
      <Tab4.Screen name="Event" component={EventScreen} />
      <Tab4.Screen name="Member" component={MemberScreen} />
    </Tab4.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
      <Drawer.Screen name="Course" component={Tab3Navigator} />
      <Drawer.Screen name="Union" component={Tab4Navigator} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()
// const App: () => React$Node = () => {
//   console.disableYellowBox = true;
//   return (
//     <>
//       <NavigationContainer>
//         <StackApp.Navigator initialRouteName="Login">
//           <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
//           <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
//           <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
//         </StackApp.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };