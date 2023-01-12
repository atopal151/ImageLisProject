import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default class UserListApi extends Component {
    state = {
   
        name: "",
        surname:"",
       
        loading: true,
    }


    componentDidMount() {

        this.getRandomUser();

    }

    getRandomUser = async () => {
        this.setState({
            loading: true,
        });
        const { data: { results } } = await axios.get('https://randomuser.me/api/');
        const { name: { first, last } } = results[0];

        this.setState({
            name: first,
            surname: last,
            loading: false
        });
    };
   

    render() {
        const { loading, surname, name } = this.state;
        return (
            <View>
                {
                    loading ? <View style={styles.container}>
                        <Text >Loading..</Text>
                    </View> :
                        <View style={styles.container}>
                           
                            <Text>{name}</Text>
                            <Text>{surname}</Text>
                           
                        </View>
                }
                <View style={styles.buttonStyle}><Button
                    title={'Random User'}
                    onPress={this.getRandomUser} /></View>
            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        height: 180,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        backgroundColor: 'pink'
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }

})