/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  View, Text, Image, FlatList, ScrollView,TouchableOpacity
} from 'react-native';
import data  from './data.json';

export default class  App extends Component{
  constructor(props){
 super(props)
 this.state={
   selected:null,
 }
  }

  renderData = (item) => {
 
    return (
      <TouchableOpacity onPress={()=>{this.setState({selected:item.name})}}>
      <View style= {[{flex:1,flexDirection : 'row',padding:10,borderWidth:0.1, shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    elevation: 0.3 }
    ,(this.state.selected === item.name)?{backgroundColor:'deeppink'}:null]}>
          <Text style={{marginVertical:15}}>{item.number}</Text>
           <View style = {{width:50,height:50}}><Image source = {{uri:item.Image}} style={{height: '100%',width:'100%',marginLeft:20,borderRadius:30,padding:10}}/></View>
           <Text style={{fontSize:14,marginLeft:30,marginVertical:15}}>{item.name}</Text>
           <View style={{flex:1,flexDirection:'row-reverse',marginVertical:15}}><Text style={{color:'black'}}>{item.value}</Text></View> 
          </View>
          </TouchableOpacity>
    )
  }
  renderItems =(item) =>{
    return(
      <View style={{width:'100%',paddingBottom:10}} >
          <Text style={{fontSize:14,marginLeft:65}}>{item.name}</Text>
         <View style = {{width:50,height:50,marginVertical:10}}><Image source = {{uri:item.Image}} style={{height: '100%',width:'100%',marginLeft:20,borderRadius:120,padding:65}}/></View>
         <Text style={{marginLeft:32,borderWidth:1,borderRadius:20,paddingHorizontal:30,borderColor:'deeppink',marginTop:90}}>{item.value}</Text>
        </View>
      )
  }
  renderCont =(item) =>{
    return(
    <View style={{width:'100%',flexDirection:'column'}}>
          <Text style={{fontSize:14,marginLeft:30}}>{item.name}</Text>
         <View style = {{width:50,height:50,marginVertical:7}}><Image source = {{uri:item.Image}} style={{height: '100%',width:'100%',marginLeft:20,borderRadius:40,padding:35}}/></View>
         <Text style={{borderWidth:1,borderRadius:20,paddingHorizontal:30,borderColor:'deeppink',marginVertical:22,marginLeft:10}}>{item.value}</Text>
      </View>
    )
    }
  render(){
    console.disableYellowBox = true
    return(
      <>
      <View style = {{backgroundColor:'white',width:'100%',display:'flex',borderRadius:10,shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 0.3}}>
      <FlatList
        contentContainerStyle={{display:'flex',alignItems:'center'}}
        data = {
      data.filter((item)=> {
      if(item.value==321) return item
     })
     }
     renderItem = {({item})=>this.renderItems(item)}
     />
      <FlatList
         contentContainerStyle={{display:'flex',justifyContent:'space-around',flexDirection:'row'}}
      data = {
     data.filter((item)=> {
      if(item.value==319||item.value==310) return item
     })
     }
     renderItem = {({item})=>this.renderCont(item)}
     />
     
     </View>
    <ScrollView style = {{ backgroundColor:'white'}}>
    <FlatList 
     data = {
     data.filter((item)=> {
      if(item.value<310) return item
     })
   }
   renderItem = {({item})=>this.renderData(item)}
  />
 </ScrollView>
   </>

    );
  }
}

