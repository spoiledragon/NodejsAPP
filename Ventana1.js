import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInputBase,
  TextInput,
  Button,
} from 'react-native';
import React, {Component} from 'react';
//importacion de los elementos graficos y demas elementos
export default class Ventana1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: 24,
      Name: "S P O I L E D UWU",
      Nameopc:"",
      AgeOpc:0,
    };
  }

  //declaracion de variables y algunas funciones
  render() {
    //aqui se declaran funciones uwu y literal asi 
    const Cname = () =>{
      this.setState({Name:this.state.Nameopc});
      this.setState({Age:this.state.AgeOpc});
    }
    //la parte que involugra la interfaz grafica (Botones, Sliders, etc)
    return (
      <View>
        <Text style={styles.Texto}>{this.state.Name}</Text>
        <Image
          style={styles.Img}
          source={require('./Imagenes/Face2.png')}></Image>
        <Text style={styles.Texto}>Edad</Text>
        <Text style={styles.Texto}>{this.state.Age}</Text>

        <View style={styles.input}>
          <TextInput placeholder="Nombre" onChangeText={(Nameopc)=>this.setState({Nameopc})}></TextInput>
          <TextInput placeholder="Edad" onChangeText={(AgeOpc)=>this.setState({AgeOpc})}></TextInput>
          
        </View>
        <View style={styles.btn}>
          <Button title='Cambiar Datos' onPress={Cname}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Texto: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  Img: {
    marginLeft: 50,
    width: 300,
    height: 300,
  },
  VS: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  input:{
    width:300,
    marginBottom: 2,
    marginLeft:50,
    marginTop:5,
    marginRight:50,
  },
  btn:{
    width:300,
    marginBottom: 2,
    marginLeft:50,
    marginTop:5,
    marginRight:50,
  }
});
