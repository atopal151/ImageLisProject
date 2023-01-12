import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class TextGiris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }
  _onChangeText = text => {
    this.setState({
      name: text,
    });
  };

  _onChangePassword = textPassword => {
    this.setState({
      password: textPassword,
    });
  };

  /**
   * 
   * Keyboard Theme
   * 
   ** dark theme => keyboardAppearance='dark'
   * 
   ** ligth theme => keyboardAppearance='light'
   * 
  Keyboard Types
  
  **-- number-pad
  **-- default
  **-- decimal-pad
  **-- numeric
  **-- email-adress
  **-- phone-pad
  
  
   
  // * Bütün yazı karakterlerini büyük harfle yazmamızı sağlar
         autoCapitalize='characters' 
   
  // * Bütün yazı karakterlerini bir kelime yazdıktan sonra boşluk bıraktığında büyük karaktere geçer
          autoCapitalize='words' 

  // *cümlelerin sonuna nokta kyduktan sonra baş harfini büyütür.
           autoCapitalize='sentences'
          
  // * Bütün yazı karakterlerini küçük harfle yazar
      autoCapitalize='none'

      
   */
  render() {
    const { name, password } = this.state;
    return (
      <View style={styles.contain}>
        <Text>{name}</Text>
        <Text>{password}</Text>
        <TextInput placeholder='Write here...' value={this.state.name} onChangeText={this._onChangeText} style={styles.textInputStyle} />
        <TextInput secureTextEntry={true} placeholder='Write password...' value={this.state.password} onChangeText={this._onChangePassword} style={styles.textInputStyle} />
        <TextInput editable={false} placeholder='Write here...' value={this.state.name} onChangeText={this._onChangeText} style={styles.textInputStyle} />
        <TextInput keyboardApperance='dark' keyboardType='number-pad' placeholder='Write here...' value={this.state.name} onChangeText={this._onChangeText} style={styles.textInputStyle} />
        <TextInput keyboardType='default' placeholder='Write here...' value={this.state.name} onChangeText={this._onChangeText} style={styles.textInputStyle} />

        <TextInput autoCapitalize='sentences' placeholder='Write here...' value={this.state.name} onChangeText={this._onChangeText} style={styles.textInputStyle} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: { justifyContent: 'center', alignItems: 'center' },

  textInputStyle: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10
  }
})