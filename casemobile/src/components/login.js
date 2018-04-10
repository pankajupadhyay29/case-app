import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

import {authenticate} from '../authentication'

const EMAIL = "admin@abc.com";
const PASSWORD = 'pass123'

export default class Login extends Component {
  state = { userName: '', password: '', error: '', loading: false };

  constructor() {
    super();
    this.onLoginSuccess = ()=>{
      
    };
  }

  onButtonPress() {
    const { userName, password } = this.state;

    authenticate(userName, password)
      .then(()=>{
        this.setState({ error: '', loading: true });
        this.onLoginSuccess();
      })
      .catch(()=>{
        this.onLoginFail();
      })    
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onSuccess() {
    this.setState({
      userName: '',
      password: '',
      loading: false,
      error: ''
    });
    console.log("login is successful..");
    this.onLoginSuccess();
  }


  render() {    
    return (
     <View style={{flex:1}}>
       <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button full onPress={this.onButtonPress.bind(this)}>
            <Text>Sign In</Text>
          </Button>
        </Form>
     </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
};

