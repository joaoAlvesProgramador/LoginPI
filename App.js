import { MaterialCommunityIcons,  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Text style={styles.textoLogo}>Login</Text>
      </View>
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Email...'
        autoCorrect={false}
        onChangeText={()=>{}}
        />
        <TextInput
        style={styles.input}
        placeholder='Senha...'
        autoCorrect={false}
        onChangeText={()=>{}}
        />
      </View>

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.textSubmit}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.textRegister}>Não tem uma conta? Cadastre-se </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop:50,
    flex:1,
    justifyContent:'center',
  },
  textoLogo:{
    fontSize: 30,
    paddingBottom:15,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'90%',
    paddingBottom:50,
  },
  input:{
    backgroundColor: '#fff',
    width:'90%',
    marginTop:10,
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderTopRightRadius:7,
    borderTopLeftRadius:7,
    padding:10,
    borderBottomWidth:3,
    borderBottomColor:'#37C919',
  },
  btnSubmit:{
    backgroundColor: '#37C919',
    width:'90%',
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
  },
  textSubmit:{
    color:'#fff',
    fontSize:18,
  },
  btnRegister:{
    marginTop:10,
  },
  textRegister:{
    color:'#37C919',
    marginBottom: 500,
  }
});
