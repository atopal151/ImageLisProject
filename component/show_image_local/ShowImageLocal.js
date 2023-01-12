import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class ShowImageLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image style={styles.imageStyle} source={require('../../assets/photo.jpg')}/>
      </View>
    );
  }
}


const styles= StyleSheet.create({
    imageStyle:{
        height:150,
        width:150,
        margin:50
    }
})