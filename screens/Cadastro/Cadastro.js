import { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles/MainStyle';
import EntypoIcons from 'react-native-vector-icons/Entypo';


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

  let cpfField = null
  let phoneField = null


    const validar = () =>{
        let error = false;
        setErrorEmail(null);
        setErrorCpf(null);

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            setErrorEmail("preencha seu e-mail corretamente");
            error = true
        }
        if(!cpfField.isValid()){
            setErrorCpf("preencha seu CPF corretamente");
            error = true
        }
        if(phoneField == null){
          setErrorTelefone('Preencha seu telefone corretamente');
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
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? 'padding' : 'height'}
      style={styles.loginContainer}
      keyboardVerticalOffset={50}
    >
      <Text h3 style={styles.loginTitle}>Cadastre-se <EntypoIcons size={30} name='flash' color='yellow' /></Text>
      <Input placeholder='E-mail'
      keyboardType='email-address'
      placeholderTextColor='grey'
      style={styles.input}
      onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)    
    }}
      errorMessage={errorEmail}
      />
      <Input placeholder='Nome'
      placeholderTextColor='grey'
      onChangeText={value => setNome(value)}
      errorMessage={errorNome}
      style={styles.input}
      />
      <View style={styles.containerMask}>
        <TextInputMask 
          placeholder='CPF'
          type={'cpf'}
          value={cpf}
          placeholderTextColor='grey'
          onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)
        }}
          returnKeyType="done"
          style={styles.maskedInput}
          ref={(ref) => cpfField = ref}
        />
      </View>
      <Text style={styles.errorMessage}>{errorCpf}</Text>

      <View style={styles.containerMask}>
        <TextInputMask 
          placeholder='Telefone'
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          placeholderTextColor='grey'
          value={telefone}
          onChangeText={value => {
            setTelefone(value)
            setErrorTelefone(null)
          }}
          returnKeyType="done"
          keyboardType='phone-pad'
          style={styles.maskedInput}
          ref={(ref) => phoneField = ref}
        />
      </View>
      <Text style={styles.errorMessage}>{errorTelefone}</Text>
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
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
    button:{
        width: '100%',
        marginTop: 10,
    },
})