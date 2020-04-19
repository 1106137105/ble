import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';

export class GoalScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64'}}>
              <CustomHeader title="Goal" isHome={true} navigation={this.props.navigation}/>
              <ScrollView style={{flex:1,marginLeft:15,marginRight:15}}>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>教育目標</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>大學部主要的定位為「培育學技合一的資管專業人才」。培育學技合一的專業人才，目的是使學生具備應有的理論基礎以及縮短學生能力與產業需求之間的差距，融合兩者的學習與訓練才足以因應產業發展所需。學生必須貫通專業領域的基本學理，同時還必須具備實踐與應用的能力，並且配合產業技術進步的現況。學技合一的發展目標十分適合技職學生以技能為導向的學習特性與發展定位。</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>核心目標</Text>
                <Text style={{color:'#a98274',marginTop:15}}>｜程式設計能力</Text>             
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>基礎程式設計能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>網站程式設計能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>行動通訊程式設計能力</Text>
                <Text style={{color:'#a98274',marginTop:15}}>｜系統開發能力</Text>  
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>系統分析與設計能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>資料庫設計能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>軟體工程能力</Text>
                <Text style={{color:'#a98274',marginTop:15}}>｜企業電子化能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>專案管理能力</Text>
                <Text style={{color:'#a98274',marginTop:15}}>｜管理決策能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>基礎統計與數學能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>創新與創意能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>一般管理能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>問題分析與解決能力</Text>
                <Text style={{color:'#a98274',marginTop:15}}>｜網路行銷企劃專案能力</Text>      
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>廣告企劃與執行能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>網路行銷企劃與執行能力</Text>                         
                <Text style={{color:'#a98274',marginTop:15}}>｜創意創新創業能力</Text>             
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>創新與創意能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>集眾人之智的成長能力</Text>
                <Text style={{color:'#ffffff',marginTop:15,marginLeft:14}}>創新與創業能力</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>微積分</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>訓練學生具備應有的數學解題能力</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>培養學生思考研究的能力</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>養成學生獨立解決問題的習慣</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>程式設計</Text>
                <Text style={{color:'#ffffff',marginTop:15,textAlign:'center'}}>本課程從基礎的C++語法到物件導向程式設計(OOP)、名稱空間、例外處理、函數等，逐一介紹無遺。本課程將強調物件導向的觀念與程式撰寫技巧，同時輔 以簡潔且連貫的程式範例來呈現程式設計的精華。透過本課程，學生將可深植物件導向程式設計的觀念，並快速上手C++程式設計。</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>資料庫管理系統</Text>
                <Text style={{color:'#ffffff',marginTop:15,textAlign:'center'}}>關連式資料庫的理論與實務設計</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>JAVA程式</Text>
                <Text style={{color:'#ffffff',marginTop:15,textAlign:'center'}}>設計  Java是屬於易學、易懂且跨平台的程式語言，在網際網路持續發展的今天，無論是J2SE、J2EE、J2ME或其他各個版本，網路程式的應用都是不可或 缺。其中 Java提供的物件在使用上相當便利，尤勝於其他程式語言。而這也意味了Java在高階語言尤其是網際網路的應用上，符合了開發時間短、可再用性高、成本 低廉…等優點。</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>財務管理</Text>
                <Text style={{color:'#ffffff',marginTop:15,textAlign:'center'}}>本課程主要探討財務管理議題(貨幣時間價值，投資組合，證券評價，投資決策, 風險管理, 洐生性金融商品等)的理論與實務。此外，訓練學生能運用資訊技術(電腦語言)自行撰寫上述財務相關的程式。目標是:</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>1.了解資訊技術在金融機構或企業所扮演的角色。</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>2.瞭解資訊技術在金融機構中的重要性</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>3.如何再提昇一數位化金融機構之管理。</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>資料庫應用系統開發</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>Basic Concepts</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>Physical Design</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>Relational Algebra</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>SQL</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>Data Warehousing</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>Data and Database Administration</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>動態網頁程式設計</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>本課程將由最基本的架站規劃開始，一步步帶領讀者了解JSP，達到建立JSP動態網站的目標。課程綱要包含了建置網站前的準備工作、基本軟體的安裝與設 定、 MySQL管理……等；Java與JSP程式設計篇則介紹JSP的語法，以及設計一些常用的函數；資料庫網頁篇包含了基本的SQL語法介紹，以及JSP與 MySQL結合的方法。資料結構  本課程教導學生瞭解程式設計中各種資料結構的方法與相關演算法的使用。</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>管理資訊系統</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>本課程的目的，就是從管理的角度來幫助學生熟悉企業應用資訊管理的基本原理。 主要上課方式為課堂講解,配合每章最後的案例進行研討</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>生產與作業管理</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>建立學生生產與作業的基本觀念及技巧，培養學生管理概念，結合未來工作實務。</Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>系統分析與設計</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>讓同學瞭解系統開發和系統分析與設計的基本觀念、原理，認識系統開發的五個主要階段（系統開發的生命週期模式）：系統規劃、系統需求分析、系統設計、系統 建置與測試、系統上線與維護等的實施重點 。進而引導同學學習系統分析與設計每個階段所使用的模式、工具與如何來進行的方法等。利用所學的工具和方法，進行實作練習，讓同學體驗系統開發的作業方法。</Text>                
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>電子商務</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>概論  整合理論與實務的觀點瞭解E-coomerce，以期建立學生對E-coomerce的整體概念。 </Text>
                <Text style={{color:'#4dd0e1',fontSize:25,marginTop:25,textAlign:'center'}}>行銷管理</Text>
                <Text style={{color:'#ffffff',marginTop:25,textAlign:'center'}}>As an integrative course, with case studies and fieldwork, much of the learning is dependent on accessing the combined knowledge and experience of the group. It is everyone's job to keep the discussion productive and moving forward. In class discussions it is equally as important to talk about how to do something as what to do.</Text>
              </ScrollView>
            </SafeAreaView>
          );
    }
}