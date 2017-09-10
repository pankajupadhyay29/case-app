/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header  from './header';
import Dashboard  from './dashboard';
import Login  from './login';
import {isAuthenticated} from '../authentication';

export default class Home extends Component {
  constructor({isAuthenticated}) {
    super();
    this.isAuthenticated = isAuthenticated;
  }

  

  render() {     
     if(this.isAuthenticated) {
         return (
          <View style={styles.container}>
            <Header key="header" title="Cases" />
            <Dashboard key= "dashboard"/>
          </View>
        );
     }
 
     return (
           <Login/>
       );     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
   }
});

