import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import data from './data';


export default class FlatLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            contacts: data,
        };
    }

    renderContactItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#ebebeb' : '' }]}>
                <Image style={styles.avatar} source={{ uri: item.picture }} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.company}</Text>
                </View>
            </TouchableOpacity>);
    };
    // ${item.name.toLowerCase()} ${item.company.toLowerCase()}
    searchFilter = text => {
        const newData = data.filter(item => {
            const listItem = item.name.toLowerCase() + item.company.toLowerCase()
            return listItem.indexOf(text.toLowerCase()) > -1;
        });
        this.setState({
            contacts: newData,
        });
    };

    renderHeader = () => {
        const { text } = this.state;
        return (
            <View style={styles.searchContainer} >
                <TextInput
                    onChangeText={text => {
                        this.setState({
                            text,
                        });
                        this.searchFilter(text);
                    }}
                    style={styles.searchInput}
                    placeholder='Write here...' />
            </View>
        )
    }

    render() {
        return (
            <FlatList
                ListHeaderComponent={this.renderHeader()}
                renderItem={this.renderContactItem}
                data={this.state.contacts}
                keyExtractor={(item) => item._id} />

        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: {
        justifyContent: 'space-around'
    },
    name: {
        fontSize: 16
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 20,
    },
    searchContainer: {
        padding: 10,
        marginVertical: 30,
    }


})