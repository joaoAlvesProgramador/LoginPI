import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
     View,
     StyleSheet,
     Text,
     StatusBar, 
     TouchableOpacity} from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <MaterialCommunityIcons name="chevron-left" size={60} color={'#fff'}/>
            </View>
            
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={26} color='#fff'/>
            </TouchableOpacity>
            </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#1E1E1E',
        flexDirection:'row',
        // paddingStart:0,
        // paddingEnd:10,
        width:'100%',
    },
    content:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    userName:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
    },
    buttonUser:{
        height:44,
        width:44,
        marginTop:8,
        marginEnd:8,
        backgroundColor:'rgba(255,255,255, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:44 / 2,
    },
    name:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',
        
    }
})