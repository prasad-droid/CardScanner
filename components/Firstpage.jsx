import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableHighlight
} from 'react-native';

function FirstPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/img/image.png')}
        resizeMode="cover"
        style={styles.bg}>
        <View style={styles.main}>
          <Text style={styles.heading}>CX Card Scanner </Text>
          <Text style={styles.subtext}>Scan paper Business Card and Convert them into actionable Phone Contact</Text>
          <TouchableHighlight style={styles.btn} onPress={()=>{console.log("HEllo")}}> 
            <Text style={styles.btnText}>Start Scanning</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  bg: {
    flex:1,
    height:"90%",
    flexDirection:"column",
    justifyContent:"flex-end"
  },
  heading:{
    color: '#EC1639',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "Mali Bold",
    marginVertical:30
  },
  subtext:{
    width:"80%",
    color:"#000000",
    textAlign:"center",
    marginHorizontal:"auto",
    fontSize:21,
    fontFamily:"Manrope-Regular"
  },
  btn:{
    backgroundColor:"#EC1639",
    width:"70%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:"auto",
    marginVertical:50,
    padding:10,
  },
  btnText:{
    color:"#FFFFFF",
    fontSize:24
  },
});

export default FirstPage;
