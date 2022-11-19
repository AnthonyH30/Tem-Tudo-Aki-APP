import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles/LoginStyles';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const Cadastrar = () =>{
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.loginContainer}>
      <Text h3>Entre no TemTudoAki</Text>
      <Input placeholder='E-mail'
      keyboardType='email-address'
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      />
      <Input placeholder='Password'
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
      <Button 
      icon={<Icon name={'check'} size={15} color='white' />}
      title=' Entrar'
      onPress={() => entrar()}
      buttonStyle={specificStyle.button}
      />
      <Button 
      icon={<Icon name={'user'} size={15} color='white' />}
      title=' Cadastrar'
      onPress={() => Cadastrar()}
      buttonStyle={specificStyle.button}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
    button:{
        width: '100%',
        marginTop: 10,
    },
})