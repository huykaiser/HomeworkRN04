import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default class Homework extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}>
                    <View style={[styles.boxYellow]}></View>
                    <View style={[styles.boxYellow]}></View>
                </View>

                <View style={[styles.box2]}>
                    <View style={[styles.boxWrap]}>
                        <View style={[styles.boxBlue]}></View>
                        <View style={[styles.boxBlue]}></View>
                    </View>

                    <View style={[styles.boxWrap]}>
                        <View style={[styles.boxBlue]}></View>
                        <View style={[styles.boxBlue]}></View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    box1:{
        flex:1,
        backgroundColor:'#A1c99A',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    box2:{
        flex:1,
        backgroundColor:'#c8c8fA',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    boxWrap:{
        flex:1,
        flexWrap:'wrap', 
    },
    boxYellow:{
        height:110,
        width:350,
        backgroundColor:'#ffffc2',
        borderRadius:20,
        marginVertical:25,
    },
    boxBlue:{
        height:120,
        width:120,
        backgroundColor:'#4f82c0',
        borderRadius:20,
        marginVertical:25,
        marginHorizontal:40,
    },
});
