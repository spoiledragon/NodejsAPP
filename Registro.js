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
  StatusBar,
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
      console.log('si');
    };
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View>
            <ImageBackground
              style={styles.bg}
              source={require('./Imagenes/background.png')}>
              
                <Image
                  style={styles.avatar}
                  size={200}
                  rounded
                  source={require('./Imagenes/logo.png')}
                />
              
              <View style={styles.inputs}>
                <Text style={styles.text}>Name</Text>
                <Input
                  onChangeText={iname => this.setState({iname})}
                  //placeholder="Name"
                  leftIcon={<Icon name="person" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Code</Text>
                <Input
                  onChangeText={icode => this.setState({icode})}
                  //placeholder="Code"
                  leftIcon={<Icon name="code" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Password</Text>
                <Input
                  onChangeText={ipassword => this.setState({ipassword})}
                  //placeholder="Password"
                  secureTextEntry={true}
                  leftIcon={<Icon name="lock" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Telephone</Text>
                <Input
                  onChangeText={itelephone => this.setState({itelephone})}
                  //placeholder="Telephone"
                  leftIcon={<Icon name="phone" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Mail</Text>
                <Input
                  onChangeText={imail => this.setState({imail})}
                  //placeholder="Mail"
                  leftIcon={<Icon name="mail" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>School</Text>
                <Input
                  onChangeText={ischool => this.setState({ischool})}
                  //placeholder="School"
                  leftIcon={<Icon name="school" size={30} color="white" />}
                />
              </View>
              <View style={styles.inputs}>
                <Text style={styles.text}>Semester</Text>
                <Input
                  onChangeText={isemester => this.setState({isemester})}
                  //placeholder="Semester"
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
            </ImageBackground>
          </View>
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
    marginTop: 10,
    marginBottom: 10,
    width: 350,
    background: (0, 0, 0, 0.5),
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
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
