import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {Avatar} from 'react-native-elements';
import {Input, Icon, Button, Divider} from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';

export default class Ventana2 extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      Name: 'no',
    };
  }
  render() {
    const navigation = this.context;
    const btnLogin=() =>{
      navigation.navigate("Register")
    }
    return (
      <View>
        <ImageBackground
          source={{
            uri: 'https://image.winudf.com/v2/image1/Y29tLm1pbmltYWxpc3Qud2FsbHBhcGVyX3NjcmVlbl8wXzE1NzY5NDM4ODFfMDMz/screen-0.jpg?fakeurl=1&type=.jpg',
          }}
          style={styles.bg}>
          <Text style={styles.tlogin}>Log In </Text>

          <Avatar
            style={styles.avatar}
            size={200}
            rounded
            source={require('./Imagenes/udg.jpg')}
          />

          <View style={styles.inputs}>
            <Input
              placeholder="User"
              leftIcon={<Icon name="person" size={34} color="white" />}
            />
          </View>

          <View style={styles.inputs}>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              leftIcon={<Icon name="lock" size={34} color="white" />}
            />
          </View>

          <Button
            title="LogIn"
            icon={{
              name: 'fire',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            }}
            iconRight
            iconContainerStyle={{marginLeft: 10}}
            titleStyle={{fontWeight: '700'}}
            buttonStyle={{
              backgroundColor: 'black',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 100,
              marginVertical: 10,
            }}onPress={btnLogin}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    with: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  tlogin: {
    
    marginTop:20,
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
    marginLeft: 100,
  },
  avatar: {
    marginTop: 30,
    width: 200,
    height: 200,
    marginLeft: 100,
    marginBottom: 40,
  },
  inputs: {
    marginTop: 5,
    marginBottom: 5,
  },
});
