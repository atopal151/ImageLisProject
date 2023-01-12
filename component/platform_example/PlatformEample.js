import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default class PlatformEample extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const headerStyle = Platform.select({
            ios: styles.IOSHeader,
            android: styles.AndroidHeader
        });
        return (
            <View style={headerStyle}>
                <Text> Header </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    IOSHeader: {
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        backgroundColor: 'orange'
    },
    AndroidHeader: {
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        backgroundColor: 'pink'
    }
})