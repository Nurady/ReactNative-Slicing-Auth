import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import {IcBack} from '../../../assets';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.iconBackWrapper}>
        <IcBack style={styles.iconBack} onPress={onPress} />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.header,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconBack: {
    height: 30,
    width: 30,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
