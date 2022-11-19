import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles/LoginStyles';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isChecked, setIsChecked] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)


    const validar = () =>{
        let error = false;
        setErrorEmail(null);
        setErrorCpf(null);

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            setErrorEmail("preencha seu e-mail corretamente")
            error = true
        }
        if(cpf == null){
            setErrorCpf("preencha seu CPF corretamente")
            error = true
        }
        return !error
    }

  const salvar = () => {
    if(validar()){
        console.log("salvou")
    }
  }

  return (
    <View style={styles.loginContainer}>
      <Text h3>Cadastre-se</Text>
      <Input placeholder='E-mail'
      keyboardType='email-address'
      onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)    
    }}
      errorMessage={errorEmail}
      />
      <Input placeholder='Nome'
      onChangeText={value => setNome(value)}
      errorMessage={errorNome}
      />
      <Input placeholder='CPF'
      keyboardType='number-pad'
      onChangeText={value => {
        setCpf(value)
        setErrorCpf(null)
    }}
      returnKeyType="done"
      errorMessage={errorCpf}
      />
      <Input placeholder='Telefone'
      keyboardType='phone-pad'
      onChangeText={value => setTelefone(value)}
      returnKeyType="done"
      errorMessage={errorTelefone}
      />
      <CheckBox
        title="Eu aceito os termos de uso"
        checkedIcon="check"
        checkedColor='green'
        uncheckedIcon="square-o"
        uncheckedColor='red'
        checked={isChecked}
        onPress={()=> setIsChecked(!isChecked)}
      />
      <Button 
      icon={<Icon name={'check'} size={15} color='white' />}
      title=' Salvar'
      onPress={() => salvar()}
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