import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header, FormInput, Button, Gap} from '../../components';
import {IlRegister} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });
  // const [form, setForm] = RegisterReducer;

  const sendData = () => {
    console.log('Data Pendaftaran Akun: ', form);
  };

  const onInputChange = (value, inputType) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
    dispatch(setForm(inputType, value));
  };

  // useEffect(() => {
  //   console.log('Reducer: ', RegisterReducer);
  // });

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <Gap height={20} />
        <IlRegister style={styles.IlRegister} />
        <Gap height={60} />
        <View style={styles.container}>
          <FormInput
            label="Nama Lengkap"
            value={form.fullName}
            // onChangeText={value => setForm({...form, fullName: value})}
            onChangeText={value => onInputChange(value, 'fullName')}
          />
          <Gap height={20} />
          <FormInput
            label="Alamat Email"
            value={form.email}
            // onChangeText={value => setForm({...form, email: value})}
            onChangeText={value => onInputChange(value, 'email')}
          />
          <Gap height={20} />
          <FormInput
            label="Password"
            value={form.password}
            // onChangeText={value => setForm({...form, password: value})}
            onChangeText={value => onInputChange(value, 'password')}
            secureTextEntry
          />
          <Gap height={50} />
          <Button
            title="Daftar"
            style={styles.buttonWrapper}
            onPress={sendData}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
