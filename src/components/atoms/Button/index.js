import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: {
    // width: '60%',
  },
  buttonContainer: {
    backgroundColor: colors.default,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: '30%',
  },
  text: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
