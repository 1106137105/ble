import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,ScrollView,Image} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image'

export class MemberScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 ,backgroundColor:'#455a64'}}>
              <CustomHeader title="Member" isHome={true} navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:15,marginRight:15}}>
                <Text style={{color:'red',fontSize:25,marginTop:25,marginLeft:130}}>學會簡介</Text>
                <Text style={{color:'#ffffff',marginTop:25}}>高雄港都資管神話，於公元2001年揭序曲，結合應用科技大學的靈魂而美麗。踏著科技浪潮，掌握資訊波動，綻放學習的元素與音符，精準地搭和著管理學院的樂章翩然舞動著。而時間所給的節奏，是一席永恆的物語，紮紮實實在歲月的流裡孕育著最頂尖的學子。堅忍勤奮的情操是固守傳承的接力棒；欣欣向榮的氣息，是延續文化的精神。循歷史的軌跡，勾勒出未來的軌道，背負著使命而翱翔。</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>系所的成立是時代的福音，專業知識的領域讓學以致用的目標近在咫呎。諸學子間的互動由系學會穿插引領著。眾優秀資管博士齊聚一堂，師資更是無庸置疑的空前。在靜與動之間締造的學習殿堂最適合培養具有整合管理與資訊科技的專業人才。認知的稻田是需要被灌溉的。麥克阿瑟曾經說過：真實偉大的樸實無華；真實智慧的虛懷若谷。簡短的兩句話，字裡行間卻道出資管系對學子的訴求。</Text>             
                <Text style={{color:'#ffffff',marginTop:15}}>在第一任系主任 吳主任文雄，別具心裁的規劃領導，第二任系主任 張主任俊陽的用心規劃，及第三任系主任 柯主任博昌將資管系主體推向資訊教育航道。其深切感染力更勝他系主任，勤勉的精神與嚴謹的態度幻化成愛的精靈滲入學子的心。如今資管系已走入第十個年頭。第四任系主任 汪主任維揚以契合企業需求，貫通學子專業領域的基本學理及強化實踐應用的課外能力，透過了解學子的需求與動機，並秉持著創新的理念，帶領我們持續走向更高更遠的水準。第五任系主任 傅主任振瑞培養自己完美的人格特質，且以「正直」、「善良」的心，隨時幫助他人及關懷社會，並開創無限的未來。第六任系主任 黃主任天受強調多元發展，鼓勵參加課外活動，擴展人際關係，自我管理。現在系主任 張主任添香重視同學們的專業發展，引領系上專業更貼近業界技術。歷屆主任加上現任主任的規劃，將使高應大資管的未來將更加茁壯！</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>在前辛勤引領著無垠學海中的築夢船往無人問津的彼岸。更細細地指引我們遠離人性墮落的深淵，讓認真鑲上動力昇華努力而為毅力，為成就廣博艱深的學問孜孜不倦。</Text>
                <Text style={{color:'yellow',marginLeft:125,marginTop:10}}>一百零八級資訊管理系學會 會長 翁瑋志</Text>
                <Text style={{color:'red',fontSize:25,marginTop:25,marginLeft:130}}>社團宗旨</Text>
                <Text style={{color:'#ffffff',marginTop:25}}>本系學會目的在於「服務系上」，不論是會員或是系上老師都是我們服務對象，與師長建立良好情感，舉辦活動促進會員之間交流，並做到監督學會之運作本分，讓資管系有家的感覺。而我們也是系上對內對外的溝通橋樑，盡力協助會員及系上老師。研究學術使會員有多方面的學習機會，發揚系譽展現系上應有特色。</Text>
                <Image style={{width:200,height:200,marginTop:15,marginLeft:90}} source={IMAGE.ICON_MEMBER_TOPIC}/>
                <Text style={{color:'red',fontSize:25,marginTop:25,marginLeft:130}}>社團特色</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>經歷三校合併後，108經歷著任期制度更動的情況，系學會的生態以及運作大大的受到影響，面臨這樣的階段，儘管遭遇再多困難與困境，我們還是盡力的維持系學會的宗旨，而108除了將傳統的大活動延續之外，對於系名更動前的作業，我們也盡力協助系辦及主任辦理各項事務。</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>108是本學會成立以來人數最少的一級，然而也是第一次遇到任期更改的我們，面對許多現實有帶來的困境，我們仍然不退縮，全力以赴做到我們能做的，凡走過必留下痕跡，很榮幸在資管系的最後一個學期中擔任為系上服務的角色，而資管系即將蛻變成智商系，108在此也即將和資管系一起走入歷史。</Text>
                <Text style={{color:'#ffa000',marginTop:25,marginLeft:50}}>「機會由自己創造，時刻提醒自己做得到」</Text>
                <Text style={{color:'yellow',marginLeft:125,marginTop:10}}>一百零八級資訊管理系學會 會長 翁瑋志</Text>
                <Text style={{color:'red',fontSize:25,marginTop:25,marginLeft:160}}>系徽</Text>
                <Image style={{width:200,height:200,marginLeft:90,marginTop:25}} source={IMAGE.ICON_MEMBER_LOGO}/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#ffffff',marginTop:15}}>Maintenance = 堅持</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>Is = 就是</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>Strength = 力量</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>燈泡象徵資管系的核心精神，不堅持</Text>
                <Text style={{color:'#ffffff',marginTop:15}}>到最後一刻永不熄滅。</Text>
                </View>
              </ScrollView>
            </SafeAreaView>
          );
    }
}