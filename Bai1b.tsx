import { Text, SafeAreaView, StyleSheet,Image ,View,Button,TextInput,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const App = () => {
  return (
    <View style={style.bg_container}>
      <Image
        source={require('./assets/lock-152879 1.png')}
        style={style.img_lock}
      />
      <Text style={style.title_Grow}>FORGET PASSWORD</Text>
      <Text style={style.text_content}>Provide your account’s email for which you want to reset your password</Text>
      <View style={style.inputContainer}>
        <Image
          source={require('./assets/mail-2935365 1.png')}
        />
        <TextInput
          // value={email}
          style={style.input_email}
          placeholder='Email'
        />
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  bg_container: {
    height:640,
    width:360,
  },
  img_lock:{
    marginTop:76,
    marginLeft:126,
    width:105,
    height:117
  },
  title_Grow:{
    width:189,
    height:58,
    marginTop:50,
    marginLeft:86,
    fontWeight:700,
    fontSize:25,
    textAlign:'center',
    fontFamily:'roboto'
  },
  input_email:{
    backgroundColor:'#C4C4C4',
    width:235,
  },
  inputContainer:{
    flexDirection:'row',
    height:45,
    marginTop:30,
    marginLeft:30
  },
  text_content:{
    fontWeight:700,
    fontSize:15,
    fontFamily:'roboto',
    textAlign:'center',
    width:290,
    marginLeft:25,
    marginTop:20,
  },
  button: {
    width: 285,
    height: 45,
    marginLeft:30,
    marginTop:50,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
})
export default App;

