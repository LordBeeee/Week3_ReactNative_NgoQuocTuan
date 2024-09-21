import { Text, SafeAreaView, StyleSheet,Image ,View,Button,LinearGradient} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
// or any files within the Snack
import AssetExample from './components/AssetExample';

const App = () => {
  return (
    <View style={style.bg_container}>
      <LinearGradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        style={style.bg_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={style.border_1}></Text>
        <text style={style.title_Grow}>GROW <br/>YOUR BUSINESS</text>
        <text style={style.text_content}>We will help you to grow your business using
  online server</text>
        <View style={style.flex_row}>
          <Button
            title="LOGIN"
            buttonStyle={style.btn_login}
            color="yellow"
          />
          <Button
          title="SIGN UP"
          color="yellow"
          />
        </View>
        <Text style={style.text_content_1}>HOW WE WORK?</Text>
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  bg_container: {
    height:640,
    width:360
  },
  border_1: {
    width:140,
    height:140,
    borderWidth:10,
    marginTop:67,
    borderRadius:80,
    marginLeft:110
  },
  title_Grow:{
    width:189,
    height:58,
    marginTop:70,
    marginLeft:86,
    fontWeight:700,
    fontSize:23,
    textAlign:'center',
    fontFamily:'roboto'
  },
  text_content:{
    fontWeight:700,
    fontSize:15,
    fontFamily:'roboto',
    textAlign:'center',
    width:300,
    marginLeft:35,
    marginTop:40,
    marginBottom:50
  },
  btn_login:{
    width:119,
    height:48,
    marginLeft:34,
    borderRadius:15,
    backgroundColor:'yellow',
  },
  flex_row:{
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  text_content_1 :{
    marginLeft:110,
    fontWeight:700,
    fontFamily:'roboto',
    fontSize:18,
    width:300,
    marginTop:30,
  }
})
export default App;

