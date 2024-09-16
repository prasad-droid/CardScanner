import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default function Register(){
    return (
        <SafeAreaView>
             <Image source={require('../assets/img/logintop.png')} style={styles.image}></Image>
             <View style={styles.conatiner}>
                <TextInput style={styles.inputs} placeholder='Email Address' placeholderTextColor={"grey"}></TextInput>
                <TextInput style={styles.inputs} placeholder='UserName' placeholderTextColor={"grey"}></TextInput>
                <TextInput style={styles.inputs} placeholder='Company Name' placeholderTextColor={"grey"}></TextInput>  
                <TextInput style={styles.inputs} placeholder='Role In Company' placeholderTextColor={"grey"}></TextInput>
                <TextInput style={styles.inputs} placeholder='Password' placeholderTextColor={"grey"}></TextInput>
                <TouchableHighlight style={styles.btn}>
                    <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>Create Account</Text>
                </TouchableHighlight>
                <Text style={{color:"grey"}}>Forgot Password?</Text>
                <TouchableHighlight style={styles.btn2}>
                    <Text style={{color:"black",fontSize:20,fontWeight:'bold'}}>LOGIN</Text>
                </TouchableHighlight>
             </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:{
        // flex:1,
        width:"100%",
        height:"45%"
    },
    conatiner:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:"5%"
    },
    inputs:{
        borderColor:"#EC1639",
        borderWidth:2,
        width:"80%",
        height:50,
        color:"black",
        fontSize:16,
        paddingHorizontal:17,
        marginVertical:8,
        borderRadius:6,
    },
    btn:{
        backgroundColor:"#ec1639",
        display:"flex",
        alignItems:"center",
        borderColor:"#EC1639",
        borderWidth:2,
        width:"80%",
        padding:15,
        marginVertical:8,
        borderRadius:8,
    },
    placeholder:{
        color:"black"
    },
    btn2:{
        display:"flex",
        alignItems:"center",
        borderColor:"#EC1639",
        borderWidth:2,
        width:"80%",
        padding:15,
        marginVertical:8,
        borderRadius:8,
    },
})                    