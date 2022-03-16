import React, {Component} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import MenuDrawer from 'react-native-side-drawer';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Input, Icon, Button, Picker} from 'react-native-elements';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num_participantes: 0,
      open: false,
    };
  }

  //drawwer!!
  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <View>
          <View style={styles.avatar}>
            <Avatar
              size={64}
              rounded
              icon={{name: 'pencil', type: 'font-awesome'}}
              containerStyle={{backgroundColor: '#6733b9'}}
            />
          </View>

          <Text style={styles.Info}>Nombre</Text>
          <Text style={styles.Info}>Carrera</Text>
        </View>
      </TouchableOpacity>
    );
  };
  //fin del drawer!!

  render() {
    const update = numero => {
      this.setState({num_participantes: numero});
    };
    const btn = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log('Pressed');
          console.log(xhttp.responseText);

          if (xhttp.responseText > 0) {
            update(xhttp.responseText);
          }
        }
      };
      xhttp.open('GET', 'https://spoiledragon.000webhostapp.com/Cont.php');
      xhttp.send();
    };

    return (
      <View>
        <ImageBackground
          style={styles.bg}
          source={require('./Imagenes/background.png')}>
          <View style={styles.container}>
            <View>
              <Text style={styles.numero}>{this.state.num_participantes}</Text>
            </View>

            <Button
              title="Refresh"
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
                width: 500,
                marginHorizontal: 0,
                marginVertical: 10,
              }}
              onPress={btn}
            />

            <MenuDrawer
              open={this.state.open}
              position={'left'}
              drawerContent={this.drawerContent()}
              drawerPercentage={70}
              animationTime={250}
              overlay={true}
              opacity={0.4}>
              <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
                <Text style={styles.Info}>Open</Text>
              </TouchableOpacity>
            </MenuDrawer>
          </View>
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
  numero: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  Info: {
    textAlign: 'left',
    fontSize: 15,
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',

    padding: 30,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#464646',
    padding: 10,
  },
  body: {
    marginTop: 50,
    alignItems: 'center',
  },
  avatar: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
