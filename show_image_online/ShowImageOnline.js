import React, { Component } from 'react';
import { View, StyleSheet, Image,Dimensions } from 'react-native';

export default class ShowImageOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Image  resizeMode={'cover'} style={styles.imageStyle} source={{ uri: 'https://images.pexels.com/photos/10060390/pexels-photo-10060390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}/>
            </View>
        );
    }
}

/*
yeniden boyutlandırma metodları

--contain
--cover
--center
--repeat
--stretch

*/

const styles = StyleSheet.create({
    imageStyle: {
       borderColor:'red',
        borderWidth:2,
        height: 250,
        width: Dimensions.get('window').width //Genişlikte Tam ekrana kaplamaya yarar


    }
})