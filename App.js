import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,StatusBar} from 'react-native';

const App=()=>{
  const [randomColor,setRandomColor]=useState("rgb(190,189,105)")
  reset=()=>{
    setRandomColor("rgb(0,0,0)");
  }
  changeColor=()=>{
    let col="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
    setRandomColor(col);
  }
  return (
    < >
    <StatusBar backgroundColor={randomColor} />
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={changeColor}>
      <Text style={styles.txt} >tap me come on!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} >
      <Text style={[styles.txt,{marginTop:20}]} >reset</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}


export default App;
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  txt:{
    fontSize:32,
    fontWeight:'bold',
    color:'#00ffff',
    borderRadius:15,
    backgroundColor:'#000000',
    borderWidth:5,
    paddingVertical:10,
    paddingHorizontal:10,
    borderColor:'#00ffff',
    textTransform:'uppercase'
  }
});