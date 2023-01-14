import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles/MainStyle';
import EntypoIcons from 'react-native-vector-icons/Entypo';


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
      <Text h3 style={styles.loginTitle}><EntypoIcons size={30} name='flash' color='yellow' />Thunder</Text>
      <Input placeholder='E-mail'
      keyboardType='email-address'
      leftIcon={{type: 'font-awesome', name: 'envelope', color: 'white'}}
      onChangeText={value => setEmail(value)}
      />
      <Input placeholder='Password'
      leftIcon={{type: 'font-awesome', name: 'lock', color: 'white'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
      <Button 
      icon={<Icon name={'check'} size={15} color='black' />}
      title=' Entrar'
      onPress={() => entrar()}
      buttonStyle={specificStyle.button}
      titleStyle={{color: 'black'}}
      />
      <Button 
      icon={<Icon name={'user'} size={15} color='black' />}
      title=' Cadastrar'
      onPress={() => Cadastrar()}
      buttonStyle={specificStyle.button}
      titleStyle={{color: 'black'}}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
    button:{
      width: 200,
      marginTop: 10,
      backgroundColor: 'yellow',
      color: 'black'
    },
})