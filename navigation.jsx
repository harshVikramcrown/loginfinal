import React, { Component,useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';

const Navigation=({navigation})=>{
// const Nav= useNavigation();
 const [selectedValue, setSelectedValue] = useState("Menu");

return(

 
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

<ImageBackground style={styles.backgroundImage} source={require("./b.jpg")}>
           </ImageBackground>

<Picker 
        selectedValue={selectedValue}
        style={{ flex:0.5,height: 50, width: 110,bottom:10,left:140, }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Menu" value="menu" />
        <Picker.Item label="Coffee" value="coffee" />
        <Picker.Item label="Hot Chocolate" value="hotchoco" />
        <Picker.Item label="Cold Coffee" value="coldcoffee" />

      </Picker>



           
           <Image style={styles.img} source={require("./cafe.png")}></Image>
    <Text style={styles.des}>Hello There!</Text>
    <Button title="Click to go Back"
    style={styles.inp}
    onPress= {()=>navigation.goBack()}
    />
    
    </View>
    
);
}
const styles = StyleSheet.create({
 
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
      },

      img:{
          bottom:10,
        marginBottom: 150,
        height:300,
        width:350,
        opacity: 0.6,
      },
      inp:{
        position:"absolute",
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      des:{
        fontSize:60,
        color:'white',
        fontStyle:'italic',
        fontWeight:'bold',
        textShadowColor:'brown',
        textShadowRadius:10,
        textDecorationColor:'black',
        marginBottom:90,
        bottom:30,
      }
    });
    
export default Navigation;