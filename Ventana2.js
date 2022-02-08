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

export default class Ventana2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'no',
    };
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={{
            uri: 'https://p4.wallpaperbetter.com/wallpaper/100/279/758/stardew-valley-moon-landscape-pixel-art-hd-wallpaper-preview.jpg',
          }}
          style={styles.bg}>
          <Text style={styles.tlogin}>Log In </Text>

          <Avatar
            style={styles.avatar}
            size={200}
            rounded
            source={require('./Imagenes/Face.png')}
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
            }}
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
