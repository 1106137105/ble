import React,{Component} from 'react';
import { Text,SafeAreaView,ScrollView} from 'react-native';
import {CustomHeader} from '../index';

export class Feature_1Screen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Feature" navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:35,marginRight:35}}>
                <Text style={{textAlign:'center',color:'#00796b',fontSize:30,fontWeight:'bold'}}>智慧商務基礎必修</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>為了因應智慧商業時代的到來，本系在必修科目部分主要分為智能管理與技術兩大類別。在管理部分以智慧商務理論與概念為主，在技術部分則著重雲端運算、人工智慧、物聯網，以及大數據分析的應用。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>課程內容包含</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>技術相關</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>程式設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>基礎網頁設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>微積分</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>伺服器端網頁設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>Linux系統管理與應用</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>資料庫管理</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>人工智慧與深度學習應用</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>機器學習應用</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>大數據商業分析與決策</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>實務專題</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智慧商務管理相關</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>商業智慧導論</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>經濟學</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>會計學</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>統計學</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>資料分析與統計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>系統分析與設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>智慧商務資訊系統</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>未來出路</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作說明</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>人工智慧應用工程師為應用統計相關原理以解決非線性結構問題的專業人士。主要工作內容為應用讓電腦可以自動「學習」的演算法，從資料中自動分析獲得模式，利用模式對未知資料進行預測。Gartner報告指出，2020年全球將有180萬個職缺被AI取代，並創造出230萬個全新工作機會。104人力銀行數據長呂承諭分析，國內目前AI人才缺口約6000人，呈現翻倍成長，與AI相關的職務，平均年薪達新台幣122萬元。</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作技能</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>具備機器學習與深度學習開發與應用技能。</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}