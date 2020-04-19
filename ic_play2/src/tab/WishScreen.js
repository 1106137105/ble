import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import {CustomHeader} from '../index';

export class WishScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 ,backgroundColor:'#455a64'}}>
              <CustomHeader title="願景" isHome={true} navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:15,marginRight:15}}>
                <Text style={styles.titlestyle}>簡介</Text>
                <Text style={styles.textstyle}>因應雲端世界的來臨，國立高雄科技大學「智慧商務系」於108學年由(原)高雄應用科技大學「資訊管理系」改名與轉型而成。</Text>             
                <Text style={styles.textstyle}>智慧商務學系主要重點為結合人工智慧與大數據分析技術於商業管理，為智慧科技與商務應用的跨界整合</Text> 
                <Text style={styles.textstyle}>共分為「創新網路行銷與分析」、「智慧雲端商務系統開發」、「智慧物聯網」、跨領域「智慧金融與大數據」四大學程。</Text>
                <Text style={styles.textstyle}>教學方向以實務研究發展為目標，與在地產業進行合作與學習，最終連結至職場實習與就業，以培育智慧商務領域所需之人才。</Text>
                <Text style={styles.titlestyle}>沿革</Text>
                <Text style={styles.textstyle}>本系於89年3月17日獲教育部核准通過設立；90學年度起正式招收大學部四年制2班</Text>
                <Text style={styles.textstyle}>本系第一間電腦專業教室於89年12月完成規劃建置。</Text>
                <Text style={styles.textstyle}>本系於91年10月獲教育部核准同意於93學年度增設「資訊管理系碩士班」，首屆招生名額15位。</Text>
                <Text style={styles.textstyle}>本系第二間電腦專業教室於92年9月完成規劃建置。</Text>
                <Text style={styles.textstyle}>本系獲教育部核准同意於94學年度增設「資訊管理系碩士在職專班」首屆招生名額7位。</Text>
                <Text style={styles.titlestyle}>教學宗旨</Text>
                <Text style={styles.textstyle}>教育宗旨在於培育具有整合管理與資訊科技的專業人才。</Text>
                <Text style={styles.textstyle}>透過理論基礎的建立與實務界產學合作的方式，建立學生在資訊管理之專業核心能力</Text>
                <Text style={styles.textstyle}>並培養學生成為具有國際觀的管理及策略的領導者。</Text>
                <Text style={styles.titlestyle}>教育目標</Text>
                <Text style={styles.textstyle}>專業導向：培育具有整合管理與資訊科技的專業人才。</Text>      
                <Text style={styles.textstyle}>學技合一：理論與實務結合之認知學習，產學合作訓練之技術培養。</Text>
                <Text style={styles.textstyle}>前瞻養成：以資訊管理專業核心能力為基礎，涵養具有國際觀的資訊人才。</Text>                         
                <Text style={styles.titlestyle}>本系特色</Text>             
                <Text style={styles.textstyle}>提供網路服務開發、企業電子化及金融資訊等選修課程，並鼓勵選修外系相關學程(如電子商務學程等)，增加學生在應用領域的相關知識，以擴展學生的專業能力。</Text>
                <Text style={styles.textstyle}>專題製作與企業界專案結合，以強化學生之實務能力。</Text>
                <Text style={styles.textstyle}>開設國家級證照（經濟部舉辦的資訊人員證照等）考試科目的課程，以提升學生職場就業之競爭能力。</Text>
                <Text style={styles.textstyle}>因應國際化潮流，提供四年英文說、讀、聽、寫的訓練課程，以增強學生外語能力。</Text>
                <Text style={styles.titlestyle}>優秀師資</Text>             
                <Text style={styles.textstyle}>本系編制資管專任教師員額16位，現有資管專任師資13位，105學年度擬再新聘2位具有資管、資工或資科專長之博士師資。</Text>
                <Text style={styles.titlestyle}>未來展望</Text>             
                <Text style={styles.textstyle}>訂定取得國家級資訊專業人員證照（經濟部主辦）人才養成計畫，打造專業地位。</Text>
                <Text style={styles.textstyle}>配合在地產業發展及特色，打造專業形象與口碑，爭取產學合作之先機。</Text>
                <Text style={styles.textstyle}>結合產官學三方面的資源，推動產學合作計畫，將學術研究成果逐?落實於產業中。</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}

const styles=StyleSheet.create({
  textstyle:{
    color:'#ffffff',
    marginTop:15,
    textAlign:'center'
  },
  titlestyle:{
    color:'#4dd0e1',
    fontSize:25,
    marginTop:25,
    textAlign:'center'
  }
})