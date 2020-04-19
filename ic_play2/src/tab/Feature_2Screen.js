import React,{Component} from 'react';
import { Text,SafeAreaView,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';

export class Feature_2Screen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Feature" navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:35,marginRight:35}}>
                <Text style={{textAlign:'center',color:'#00796b',fontSize:30,fontWeight:'bold'}}>創新網路行銷與分析學程</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>創新網路行銷與分析學程設置宗旨在於因應網路電商時代的來臨，培育學生智慧商務與創新行銷能力，其中課程內容主要針對智慧技術與電商管理二部分為主，包含電子商務網站建置、電子商務行銷操作、以及電子商務大數據分析。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>課程內容包含</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>資料倉儲與線上分析</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程介紹資料倉儲的概念、建構及線上分析的原理與操作。資料倉儲為商業智慧的基礎核心，企業將內、外部的大量資料，透過擷取、轉換及載入等程序後，將之存入資料倉儲，據以提供線上分析處理(OLAP)、資料採礦(Data Mining)等其他資料分析技術所使用，從而促成決策支援系統(DSS)、主管資訊系統(EIS)之建立。線上分析是一套以多維度方式分析資料，能彈性地提供Roll-up、Drill-down、和樞紐分析。主要方便大規模資料分析，對決策提供參考和支援。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智慧商務平台規劃與設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程主要教授電子商務平台的規劃與設計，以及商務平台上線後，平台的推廣以及平台成效的分析。本課程主要教授wordpress網站架設，並輔以Google analysis進行網站推廣的成效分析，包含瀏覽人次、瀏覽來源、以及各網頁瀏覽量分析。最終目的培養學生電子商務網站的實務架設能力。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>電子商務與網路拍賣</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程主要結合理論與實務之應用，教授學生對於網路行銷理論、策略，以及網拍實務應用之瞭解。本課程將進行網路行銷企劃與實務操作，透過網路拍賣平台的實際操作，瞭解網路拍賣市場分析、產品設計、行銷策略，以及拍賣績效評估。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>社群行銷與口碑分析</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程能培養學生社群行銷觀念，並透過實際成功案例，分析社群行銷關鍵成功因素。學生在修習此課程後，能瞭解社群行銷策略應用，並能撰寫社群行銷企業書、執行社群行銷活動，以及最終衡量社群行銷之效益。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>APP程式開發與設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>提供學生運用Apache Cordova結合HTML5、CSS3、jQuery、JSON開發跨平台行動網頁及手機應用程式之能力，並在課程中實際完成App手機應用專案。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智慧行銷應用專題</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程的目標在帶領學生開發智慧行銷資訊系統。課程包括智慧行銷資訊系統案例介紹及開發技術，增強學生對於各種智慧行銷資訊系統的理解及開發能力。透過需求分析瞭解企業面臨的問題與需求，進而分析企業所需要的系統功能，最後開發智慧行銷資訊系統提出解決方案。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>未來出路</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作說明</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>電子商務工程師是指在各類事業組織中具有電子商務交易模式、電子商務支付與安全、網路營銷、電子商務法律等商業管理知識，從事業務流程系統分析、電子商務系統規劃和設計、網路資訊收集與整理、網路營銷管理、電子商務軟體和工具應用、電子商務系統維護、相關數據管理的專業性和綜合性專業資格人才。</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作技能</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>網路交易平台管理、網路交易平台設計、網路交易平台金流與物流管理、網路行銷活動企劃。</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}