import React,{Component} from 'react';
import { Text,SafeAreaView,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';

export class Feature_3Screen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Feature" navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:35,marginRight:35}}>
                <Text style={{textAlign:'center',color:'#00796b',fontSize:30,fontWeight:'bold'}}>智慧雲端商務系統開發學程</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>智慧雲端商務系統開發學程設置宗旨在於培養網站系統開發、及行動通訊軟體開發人才，學生可依興趣選修相關課程，培養學生網頁資訊系統之規劃、建置及管理能力，或培育學生具備行動通訊軟體開發領域的規劃、設計與研發能力。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>課程內容包含</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>MVC系統架構</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>在網頁系統設計中，培養學生具備伺服器端Model-Controller的設計理念，同時在瀏覽器端也能透過HTML, CSS實作網頁畫面(View)方式，最後學習以AJAX-JSON型式在server與client間互動。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>前端網頁框架設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程將介紹如何建構網際網路的前端網頁，透過相關觀念的介紹，技術解說與實務操作，讓學生有能力自行建立前端網頁框架，本課程的內容包含網頁規劃、網頁設計與學習如何美化網頁內容等。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>APP程式開發與設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>提供學生運用Apache Cordova結合 HTML5、CSS3、jQuery、JSON開發跨平台行動網頁及手機應用程式之能力，並在課程中實際完成App手機應用專案。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智慧雲端商務專題</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程以專題導向探究目前智慧雲端商務產業的真實問題及開發智慧雲端裝置與系統的實作能力。此課程為實作課程，同學藉由實務經驗提升理解與開發能力。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>未來出路</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作說明</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>雲端工程師是軟體項目搭配雲端計算的總體設計師，主要負責雲端系統運算與服務平台的平行化與分散式軟體設計、開發與服務。工作內容包含根據企業流程設計雲端系統功能，草擬系統軟體架構之藍圖，並列出影響雲端系統軟體架構的可能因素清單。富比世雜誌（Forbes）報導，現今全美有390萬個工作與雲端運算相關，而全球總計有1,820多萬份IT工作仰賴雲端技術。</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作技能</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>雲端服務應用與管理 ( 軟體、平台、基礎設施 ) 、雲端運算程式設計。</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}