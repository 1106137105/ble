import React,{Component} from 'react';
import { Text, View ,SafeAreaView,ScrollView,Image,Dimensions} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';


export class EventScreen extends Component{
    render(){
      let screenwidth = Dimensions.get('window').width;
      let screenheight = Dimensions.get('window').height;
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64',flexDirection:'column'}}>
              <CustomHeader title="Event" isHome={true} navigation={this.props.navigation}/>
              <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
                <View style={{backgroundColor:'black',flex:1,width:screenwidth}}>
                  <Image source={IMAGE.ICON_EVENT_1} />
                  <Text style={{fontSize:25,padding:20,color:'#f9a825',textAlign:'center'}}>108級 聖誕節活動-聖塔可辣資</Text>
                  <Text style={{fontSize:20,color:'white'}}>今年延續了去年的交換禮物活動，交換禮物是一個可以跨越年及連結系上同學的活動，而今年除了交換禮物外另外增加了新的競賽遊戲找彩蛋，讓大家感受和以往不同的聖誕節，增加一點刺激的元素，最後還有準備好吃的點心飲料讓系會員一邊休息吃東西一邊期待自己抽到什麼禮物。</Text>
                  <Text style={{textAlign:'right',color:'white',fontSize:15}}>執秘：翁瑋志</Text>
                  <Text style={{textAlign:'right',color:'white',fontSize:15}}>日期：2018/12-25</Text>
                </View>
                <View style={{backgroundColor:'white',flex:1,width:screenwidth}}>
                  <Image source={IMAGE.ICON_EVENT_2}/>
                  <Text style={{fontSize:25,padding:20,color:'#f9a825',textAlign:'center'}}>108級 家族活動－金家好水餃</Text>
                  <Text style={{fontSize:20,color:'black'}}>本活動是為了促進家族內學長姐與學弟妹之間的感情，同時也是少數全體資管系師生能一同參與的活動，讓師生之間不只有課堂上的師生關係，也能像朋友一樣一起包水餃同歡，學長姐與學弟妹也能更了解彼此，使家族成員關係更親近。除了包水餃外，活動中還會穿插家族間的遊戲競賽，讓活動更有趣且不乏味。</Text>
                  <Text style={{textAlign:'right',color:'black',fontSize:15,marginTop:15}}>執秘：呂振銘</Text>
                  <Text style={{textAlign:'right',color:'black',fontSize:15}}>日期：2018</Text>
                </View>
                <View style={{backgroundColor:'black',flex:1,width:screenwidth,height:300}}>
                  <Image source={IMAGE.ICON_EVENT_3} />
                  <Text style={{fontSize:25,padding:10,color:'#f9a825',textAlign:'center'}}>108級 高科傳說-具資外械</Text>
                  <Text style={{fontSize:20,color:'white'}}>108級和模具、應外、機械三系共同舉辦了四系聯合春令營，希望透過春令營可以達到傳遞熱情給學弟妹，還有凝聚幹部感情以及訓練幹部的能力等共同理念，而聯合系同時也成為自系的另一個資源和朋友，也是一個讓幹部及學員有機會認識到不同的人增加不同的視野的好機會。</Text>
                  <Text style={{textAlign:'right',color:'white',fontSize:15}}>執秘：翁瑋志</Text>
                  <Text style={{textAlign:'right',color:'white',fontSize:15}}>日期：2019-3-15~3-17</Text>
                </View>
              </ScrollView>
            </SafeAreaView>
          );
    }
}