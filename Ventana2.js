import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,Alert
} from 'react-native';
import React, {Component} from 'react';
import {Input, Icon, Button, Divider} from 'react-native-elements';
import {NavigationContext} from '@react-navigation/native';

export default class Ventana2 extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      tuser: '',
      tpassword: '',
    };
  }
  render() {
    const navigation = this.context;
    const btnRegister = () => {
      navigation.navigate('Register');
    };

    const btnLogin = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          // Typical action to be performed when the document is ready:
          //aqui es que nos contesto el server
          console.log(xhttp.responseText);
          if(xhttp.responseText==0){
            console.log("bienvenido");
            //usuario autentificadoy
            navigation.navigate('Main');
          }if (xhttp.responseText==1){
            //usuario o contraseña incorrecta
            Alert.alert("Error","Usario no Encontrado",[{text:"OK",onPress:()=>console.log("Usuario O CONTRASEÑA INVALIDA")}])
          }if(xhttp.responseText==2){
            //usuario no existe
            Alert.alert("Error","Usuario No Existe",[{text:"OK",onPress:()=>console.log("Usuario NO EXISTE")}])
          }
        }
      };
      xhttp.open(
        'GET',
        'https://spoiledragon.000webhostapp.com/Login.php?cod='+this.state.tuser+'&pass='+this.state.tpassword,

        true,
      );
      console.log('https://spoiledragon.000webhostapp.com/Login.php?cod='+this.state.tuser+'&pass='+this.state.tpassword);
      xhttp.send();
    };
    return (
      <View>
        <ImageBackground
          source={require('./Imagenes/background.png')}
          style={styles.bg}>
          <Text style={styles.tlogin}>Log In </Text>

          <Image
            style={styles.avatar}
            size={200}
            rounded
            source={require('./Imagenes/logo.png')}
          />

          <View style={styles.inputs}>
            <Input
              onChangeText={tuser => this.setState({tuser})}
              placeholder="Code"
              keyboardType='number-pad'
              inputStyle={{color: 'white'}} 
              leftIcon={<Icon name="person" size={34} color="white" />}
            />
          </View>

          <View style={styles.inputs}>
            <Input
              onChangeText={tpassword => this.setState({tpassword})}
              placeholder="Password"
              secureTextEntry={true}
              inputStyle={{color: 'white'}} 
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
            onPress={btnLogin}
          />

          <Button
            title="Registro"
            icon={{
              name: 'add',
              type: 'evilicons',
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
            onPress={btnRegister}
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
    marginTop: 20,
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
