import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.link(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
