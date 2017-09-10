import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Button } from './common'

export default class Header extends Component {

  constructor({ title }) {
    super();
    this.title = title;        
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.viewStyle}>
        <Text key="headerText" style={styles.textStyle}>{this.title}</Text>
        <Text key="logout" onPress={()=>{
          navigate('Login', {onLoginSuccess:()=> {
              navigate('Home')
              }})
         }} style={styles.logoutButtonStyle}>
          Log Out
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'black',
    height: 60,
    paddingTop: 10
  },
  logoutButtonStyle: {
    fontSize: 12,
    color: 'white',
    position: 'relative',
    marginRight: 10,
    textAlign: 'right'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  }
});
