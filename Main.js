import React, {Component} from 'react';
import {NavigationContext} from '@react-navigation/native';
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
    };
  }

  render() {

    const update=(numero)=>{
        this.setState({num_participantes: numero});
    };
    const btn = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Pressed");
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
          <Text style={styles.numero}>{this.state.num_participantes}</Text>

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
              width: 200,
              marginHorizontal: 100,
              marginVertical: 10,
            }}
            onPress={btn}
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
  numero: {
    marginTop:300,
    marginBottom:200,
    textAlign: 'center',
    fontSize: 30,
  },
});
