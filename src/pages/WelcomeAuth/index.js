import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IlWelcome} from '../../assets';
import {Button, Gap} from '../../components';
import {colors} from '../../utils';

const WelcomeAuth = ({navigation}) => {
  // const handleGoTo = (screen) => {
  //     navigation.navigate(screen)
  // };
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={IlWelcome} />
      <Gap height={50} />
      <Text style={styles.text}>Selamat Datang di</Text>
      <Text style={styles.text}>Bimbel Paseban</Text>
      <Gap height={50} />
      <Button title="Masuk" onPress={() => navigation.navigate('Login')} />
      <Gap height={30} />
      <Button title="Daftar" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.backgroundWelcome,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 130,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.default,
  },
});
