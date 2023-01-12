import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default class UserListApi extends Component {
    state = {
        id: "",
        name: "",
        username: "",
        email: "",
        address: "",
        phone: "",
        website: "",
        company: "",

        person: []
    }


    componentDidMount() {


        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const person = res.data;
                this.setState({ person });
                console.log(person[0].name);
                console.log(person.length);
                this.setState({
                    id: person[0].id,
                    name: person[0].name,
                    username: person[0].username,
                    email: person[0].email,
                    address: person[0].address.city,
                    phone: person[0].phone,
                    website: person[0].website,
                    company: person[0].company.name,

                })
            })


        /*axios
        .all([
          axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
              // handle success
              alert('Post 1 : ' + JSON.stringify(response.data));
            }),
          axios
            .get('https://jsonplaceholder.typicode.com/posts/2')
            .then(function (response) {
             
              // handle success
              alert('Post 2 : ' + JSON.stringify(response.data));
            }),
        ])
        .then(
          axios.spread(function (acct, perms) {
            // Both requests are now complete
            alert('Both requests are now complete');
          }),
        );*/
    }

    render() {
        const { id, name, username, email, address, phone, website, company, person } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    {id}
                </Text>
                <Text>
                    {name}
                </Text>
                <Text>
                    {username}
                </Text>
                <Text>
                    {email}
                </Text>
                <Text>
                    {address}
                </Text>
                <Text>
                    {website}
                </Text>
                <Text>
                    {phone}
                </Text>
                <Text>
                    {company}
                </Text>
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
    }
})