import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window'); // cihazın genişliğini alır
export default class ScrollComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
//pagingEnabled={true} kaydırmada 1. 2. yeotomatik atıyor
    render() {
        return (
            <View>
                <View style={styles.countain} >
                    <ScrollView horizontal={true} pagingEnabled={true}>
                        <Text style={styles.titleStyleHorizontal}> 1 </Text>
                        <Text style={styles.titleStyleHorizontal}> 2 </Text>
                        <Text style={styles.titleStyleHorizontal}> 3 </Text>
                        <Text style={styles.titleStyleHorizontal}> 4 </Text>

                    </ScrollView>
                </View>

                <View style={styles.countain}>
                    <ScrollView >
                        <Text style={styles.titleStyle}> 1 </Text>
                        <Text style={styles.titleStyle}> 2 </Text>
                        <Text style={styles.titleStyle}> 3 </Text>
                        <Text style={styles.titleStyle}> 4 </Text>
                        <Text style={styles.titleStyle}> 5 </Text>

                    </ScrollView>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    countain:{

        flex:1
    },
    titleStyle: {
        width: width,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#caa',
        marginVertical: 10,
        textAlign: 'center',
        paddingVertical: 60,
        fontSize: 36
    },
    titleStyleHorizontal: {
        width: width,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#eff',
        marginVertical: 10,
        textAlign: 'center',
        paddingVertical: 60,
        fontSize: 36
    }
})