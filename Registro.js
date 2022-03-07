import React, {Component} from 'react';

import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  ToastAndroid,

} from 'react-native';

import {Input, Icon, Button,Picker} from 'react-native-elements';
export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iname: '',
      ipassword: '',
      icode: '',
      imail: '',
      isemester: '',
      ischool: '',
      itelephone: '',
    };
  }

  render() {
    const btnRegister = () => {
      console.log(
        this.state.iname,
        this.state.icode,
        this.state.ipassword,
        this.state.itelephone,
        this.state.imail,
        this.state.ischool,
        this.state.isemester,
        
      );
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //aqui es que nos contesto el server
          console.log(xhttp.responseText);
          if (xhttp.responseText == 0) {
            console.log('No Se Registro');
            //No se Registro
            this.setState.Codigo = 'Error de Registro';
            showToastWithGravity('Error de Registro');
          }
          if (xhttp.responseText == 1) {
            //Usuario Registrado con Exito
            console.log('Registrado Con Exito');
            showToastWithGravity('Registrado Con Exito');
          }
          if (xhttp.responseText == 2) {
            //usuario YA existe
            console.log('Usuario Ya Registrado');
            showToastWithGravity('Usuario Ya Registrado');
          }
        }
      };
      xhttp.open(
        //Register.php?name=Pepe&code=0000000002&pass=pepe123&tel=1010101010&mail=pepe.furry@gmail.com&school=cucea&semester=segundo
        'GET',
        'https://spoiledragon.000webhostapp.com/Register.php?name=' +
          this.state.iname +
          '&code=' +
          this.state.icode +
          '&pass=' +
          this.state.ipassword +
          '&tel=' +
          this.state.itelephone +
          '&mail=' +
          this.state.imail +
          '&school=' +
          this.state.ischool +
          '&semester=' +
          this.state.isemester,
      );
      console.log(
        'https://spoiledragon.000webhostapp.com/Register.php?name=' +
          this.state.iname +
          '&code=' +
          this.state.icode +
          '&pass=' +
          this.state.ipassword +
          '&tel=' +
          this.state.itelephone +
          '&mail=' +
          this.state.imail +
          '&school=' +
          this.state.ischool +
          '&semester=' +
          this.state.isemester,
      );
      xhttp.send();
    };

    const showToastWithGravity = mensaje => {
      ToastAndroid.showWithGravity(
        mensaje,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.slider} showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={styles.bg}
            source={require('./Imagenes/background.png')}>
            <View style={styles.trans}>
              <View style={styles.spacer}></View>

              <View style={styles.inputs}>
                <Input
                  onChangeText={iname => this.setState({iname})}
                  placeholder="Name"
                  label="Name"
                  inputStyle={{color: 'white'}}
                  ref={this.iname}
                  leftIcon={<Icon name="person" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  onChangeText={icode => this.setState({icode})}
                  placeholder="Code"
                  label="Code"
                  inputStyle={{color: 'white'}}
                  keyboardType="number-pad"
                  ref={this.icode}
                  leftIcon={<Icon name="code" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  onChangeText={ipassword => this.setState({ipassword})}
                  label="Password"
                  placeholder="Password"
                  inputStyle={{color: 'white'}}
                  secureTextEntry={true}
                  leftIcon={<Icon name="lock" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  id="telefono"
                  onChangeText={itelephone => this.setState({itelephone})}
                  placeholder="Telephone"
                  label="Telephone"
                  inputStyle={{color: 'white'}}
                  keyboardType="number-pad"
                  leftIcon={<Icon name="phone" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  onChangeText={imail => this.setState({imail})}
                  placeholder="Mail"
                  label="Mail"
                  keyboardType="email-address"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="mail" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  onChangeText={ischool => this.setState({ischool})}
                  placeholder="School"
                  label="School"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="school" size={30} color="white" />}
                />
              </View>

              <View style={styles.inputs}>


                <Input
                  onChangeText={isemester => this.setState({isemester})}
                  placeholder="Semester"
                  label="Semester"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="grade" size={30} color="white" />}
                />
              </View>

              <View>
                <Button
                
                  title="Register"
                  icon={{
                    name: 'post-add',
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
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
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
  inputs: {
    marginTop: 5,
    marginBottom: 5,
    width: 350,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    textAlign: 'left',
  },
  avatar: {
    marginTop: 30,
    width: 200,
    height: 200,
    marginLeft: 100,
    marginBottom: 40,
  },
  slider: {
    backgroundColor: 'black',
  },
  trans: {
    backgroundColor: 'rgba(10,0,0,.5)',
  },
  spacer: {
    marginTop: 30,
  },
  placeholderStyle: { fontSize: 16 },
});
