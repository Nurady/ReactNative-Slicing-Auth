import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header, FormInput, Button, Gap} from '../../components';
import {IlLogin} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Login = ({navigation}) => {
  const {form} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('Data Login: ', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Halaman Login" onPress={() => navigation.goBack()} />
        <Gap height={20} />
        <IlLogin style={styles.IlRegister} />
        <Gap height={60} />
        <View style={styles.container}>
          <Gap height={20} />
          <FormInput
            label="Alamat Email"
            value={form.email}
            onChangeText={value => onInputChange(value, 'email')}
          />
          <Gap height={20} />
          <FormInput
            label="Password"
            value={form.password}
            onChangeText={value => onInputChange(value, 'password')}
            secureTextEntry
          />
          <Gap height={50} />
          <Button
            title="Masuk"
            style={styles.buttonWrapper}
            onPress={sendData}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  IlRegister: {
    alignSelf: 'center',
  },
  container: {
    paddingHorizontal: 40,
  },
  buttonWrapper: {
    alignSelf: 'center',
  },
});
