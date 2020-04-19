import React,{Component} from 'react';
import { Text,SafeAreaView,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';

export class Feature_4Screen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64'}}>
              <CustomHeader title="Feature" navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:35,marginRight:35}}>
                <Text style={{textAlign:'center',color:'#00796b',fontSize:30,fontWeight:'bold'}}>智慧物聯網學程</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>智慧物聯網學程有系統的使學生的學習由淺入深，進而培育學生擁有智慧物聯網的概念、架構、趨勢與技術，其中包含感知層、網路層與應用層之實作技術，應用物聯網及資通訊技術於商務流程與模式效能改善，以及系統整合能力，培養具備智慧物聯網創新應用所需知識的智慧科技人才。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>課程內容包含</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>Python程式設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>Python 是一個開源(Open Source) 程式語言，最大的優勢是與目前最新的科技應用與時俱進，例如: 人工智慧、機器學習與物聯網皆有套件能夠支援，是目前普遍性與實用性較高的程式語言之一。本課程教授 python 程式語法與資料架構、運用 python 進行資料處理能力、網路爬蟲收集資料的能力與資料分析的語言撰寫能力，以成為資訊科學家、人工智慧應用工程師、物聯網工程師、智慧金融工程師奠定札實的基礎。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>感測器與物聯網實作</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程將介紹各種感測器之基本原理，進而連上網路,不僅資料或數據收集外，也可以回饋進一步進行各種控制，達到物聯網 (Internet of Things, IoT) 應用，透過循序漸進的軟硬體上機實作培養同學實際動手的能力。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智聯網系統設計與應用實務</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>智聯網系統設計與應用實務著重於物聯網異質網路 (近場通訊NFC、IEEE 802.15.1藍芽(Bluetooth)、ANT 無線感測網路協定)整合，在不同的場景應用中根據不同網路設備與智慧終端的應用需求，建立支援多種終端與網路間相互偕同的功能，以達成資料完整傳輸的任務。除了相關網路資訊的交換標準，本課程更著重於雲端服務之建立，將感知層傳回的資訊，可以透過雲端存取。此外應用層是物聯網與產業應用進行的專業技術融合，對網路層中的感知數據進行分析處理，以實現廣泛的智慧化功能，本課程將介紹智慧物聯網應用層常見雲端平台服務與介接協定: IBM Bluemix、Microsoft Azure IoT Suite。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智聯網創新應用專題</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程以專題導向探究目前智慧物聯網產業真實問題並培養學生具備知識經濟時代所需必備技能，106年度共開發四件智慧物聯網創新應用軟體創作，參與國內競賽皆榮獲冠軍。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>未來出路</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作說明</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>物聯網是由實際物體(如車輛、機器、家用電器等)，經由嵌入式感測器和 API 等裝置，透過網際網路所形成的資訊連結與交換網路。物聯網技術包含將裝置連線到網際網路的應用程式開發介面 (API)，其他包含大數據管理工具、預測分析、AI 和機器學習、雲端以及無線射頻識別 (RFID)。根據Zebra Technologies發佈的《智慧企業指數》(Intelligent Enterprise Index)調查，62%的公司計劃未來將在整個公司部署物聯網計劃，還有42%的企業預計每年至少會在物聯網上花費310萬美元。因此，為了迎頭趕上這一波物聯網的人才與技能需求，加速培訓與教育目前已是迫在眉睫。</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作技能</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>無線感測網路相關技術規格(IEEE802.15.4E、6LowPAN、RPL等)、嵌入式系統開發。</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}