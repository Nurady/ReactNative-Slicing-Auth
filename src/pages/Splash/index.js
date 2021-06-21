import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSplash} from '../../assets';
import {Gap} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2500);
  });

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <IlSplash />
        <Gap height={30} />
        <Text style={styles.text}>SMP ISLAM TERPADU</Text>
        {/* <Text style={styles.text}>PASEBAN</Text> */}
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5B7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    color: '#020202',
  },
});
