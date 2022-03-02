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

import {Input, Icon, Button, Divider} from 'react-native-elements';
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
      //mausque herramienta que nos servira mas tarde
      /*
         var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //aqui es que nos contesto el server
          console.log(xhttp.responseText);
        }
      };
      xhttp.open(
        'GET',
        'https://spoiledragon.000webhostapp.com/Temporal.php?user='+this.state.tuser+'&password='+this.state.tpassword,
        true,
      );
      xhttp.send();
      */
      showToastWithGravity();
    };

    const showToastWithGravity = () => {
      ToastAndroid.showWithGravity(
        'Registrado con Amor',
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
                <Text style={styles.text}>Name</Text>
                <Input
                  onChangeText={iname => this.setState({iname})}
                  //placeholder="Name"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="person" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Code</Text>
                <Input
                  onChangeText={icode => this.setState({icode})}
                  //placeholder="Code"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="code" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Password</Text>
                <Input
                  onChangeText={ipassword => this.setState({ipassword})}
                  //placeholder="Password"
                  inputStyle={{color: 'white'}}
                  secureTextEntry={true}
                  leftIcon={<Icon name="lock" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Telephone</Text>
                <Input
                  onChangeText={itelephone => this.setState({itelephone})}
                  //placeholder="Telephone"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="phone" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Mail</Text>
                <Input
                  onChangeText={imail => this.setState({imail})}
                  //placeholder="Mail"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="mail" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>School</Text>
                <Input
                  onChangeText={ischool => this.setState({ischool})}
                  //placeholder="School"
                  inputStyle={{color: 'white'}}
                  leftIcon={<Icon name="school" size={30} color="white" />}
                />
              </View>

              <View style={styles.inputs}>
                <Text style={styles.text}>Semester</Text>
                <Input
                  onChangeText={isemester => this.setState({isemester})}
                  //placeholder="Semester"
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
});
