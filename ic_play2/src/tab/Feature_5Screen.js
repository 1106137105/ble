import React,{Component} from 'react';
import { Text ,SafeAreaView,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';

export class Feature_5Screen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="Feature" navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:35,marginRight:35}}>
                <Text style={{textAlign:'center',color:'#00796b',fontSize:30,fontWeight:'bold'}}>智慧金融與大數據學程</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>智慧金融與大數據學程設置宗旨在培養智慧金融的分析與應用系統開發人才，課程設計以大數據資料(Big Data)分析為基礎，培養學生的數據採擷與智慧分析實力，學程規劃強調資料應用與資訊技術整合能力，以以厚植學生在商務應用系統上的開發能力，進而培育智慧商務時代所需資訊與金融跨領域實作人才。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>課程內容包含</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>Python程式設計</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>Python是一個開源(Open Source) 程式語言，最大的優勢是與目前最新的科技應用與時俱進，例如: 人工智慧、機器學習與物聯網皆有套件能夠支援，是目前普遍性與實用性較高的程式語言之一。本課程教授python程式語法與資料架構、運用python 進行資料處理能力、網路爬蟲收集資料的能力與資料分析的語言撰寫能力，以成為資訊科學家、人工智慧應用工程師、物聯網工程師、智慧金融工程師奠定札實的基礎。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>程式交易實作</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>由於金融商品交易時間日漸延長與人的判斷有不理性的問題，使得應用電腦監控金融商品交易行情與程式交易已是重要發展主流之一。本課程主要教授利用前端網頁接受指令後，因應指令的要求到後端資料庫擷取資料並進行資訊處理與分析，再將結果傳回前端網頁，前後端偕同運作。除此之外，搭配金融交易策略與即時金融商品交易資料庫，可以利用程式進行金融商品交易行情監控、回測、與達到目標價格進行程式交易，以達到智慧金融工程師所需的重要技術能力的要求。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>大數據分析與實作</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>由於資料與數據快速的累進，如何從龐大的資料中發掘數據所呈現的現象以輔助管理者進行決策是各行各業急需的工作能力。本課程主要培養學生運用各項統計分析方法與資料探勘方法的能力、龐大資料庫篩選資料的能力、撰寫程式資料預處理與分析的能力、判讀分析數據並做決策的能力，增進學生實作的能力以因應業界實務工作的需求，增加工作的競爭優勢。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>金融科技企劃與實作</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程設定目標是希望透過此課程之學習，培養同學們具備進入金融科技暨大數據分析領域任職之企劃能力。在此課程中，同學們可藉由金融科技創新案例的分析觀摩找出金融科技領域中的創新元素，並透過企劃書撰寫以及簡報技巧的訓練過程，學習到如何將創新理念具體轉化為行動方案。</Text>
                <Text style={{textAlign:'center',color:'#ffb300', marginTop:15,fontSize:20}}>智慧金融應用專題</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>本課程教學目標在於培養同學開發智慧金融商務系統之實作能力。此課程為實作課程，同學將實際運用各項金融商品之量化數據與金融社群中的數位資訊，藉由資料採礦（Data Mining）、資料倉儲（Data Warehousing）、大數據（Big Data）及人工智慧機器學習等分析技術之運用，建構新金融服務生態體系中更優質的分析與預測工具。</Text>
                <Text style={{textAlign:'center',color:'#c68400',marginTop:20,fontSize:30}}>未來出路</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作說明</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>智慧金融工程師為利用基本的金融工具和手段，運用大量的數量知識和工程技術，設計和開發新型金融工具並創造性地解決金融問題的專業人才。區塊鏈、比特幣等各種新興金融科技趨勢來臨，相關產業與市場以驚人速度成長，2018年被視為金融科技 ( FinTech ) 元年，人力銀行調查已有 6 成 2 金融業者啟動徵才計畫， FinTech 人才起薪普遍高於其他職缺，平均多出1% 。</Text>
                <Text style={{textAlign:'center',color:'#ffb300',fontSize:20,marginTop:15}}>工作技能</Text>
                <Text style={{textAlign:'center',color:'#fff',marginTop:15}}>區塊鏈概念與設計、數位金融相關概念與設計、數據分析、金融業相關知識及實務經驗。</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}