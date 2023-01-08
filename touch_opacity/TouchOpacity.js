import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class TouchOpacity extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onPressButton = () =>{
        alert('Test');
    };

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonStyle}>My Button Touch Opacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPressButton}>

                    <View >
                        <Image style={styles.imageStyle} source={require('../assets/adaptive-icon.png')} />
                    </View>
                </TouchableOpacity>

                <Button title='My Button' color='#FF3cd4'></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 100, width: 100
    },

    buttonContainer: {
        padding: 15,
        backgroundColor: 'orange',
        borderRadius: 15,
        margin: 10,

    },
    buttonStyle: {
        fontSize: 24,
        color: 'white'
    }
})