import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha ] = useState('')
  const ValidaLogin = function (){
    if (email == 'admin@gmail.com' && senha == '1234') {
      console.log ('Login Correto')
    } else {
console.log ('Incorreto')

    }
  }   
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' onChangeText={(text)=>setEmail(text)} />
      <TextInput placeholder='Senha' onChangeText={(text)=>setSenha(text)} />
        <Button title='Entrar' onPress={()=> ValidaLogin()} />
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEF8F4',
    alignItems: 'Center',
    justifyContent: 'Center',
    
  },
});
