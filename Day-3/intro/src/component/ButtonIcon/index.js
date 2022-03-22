import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Sewa Mobil')
      return <Feather name="truck" color="#5CB85F" size={25} />;
    if (title === 'Oleh-oleh')
      return <Feather name="box" color="#5CB85F" size={25} />;
    if (title === 'Penginapan')
      return <Feather name="key" color="#5CB85F" size={25} />;
    if (title === 'Wisata')
      return <Feather name="camera" color="#5CB85F" size={25} />;

    return <Feather name="key" />;
  };
  return (
    <View>
      <View style={styles.Button}>
        <Icon />
      </View>
      <View style={{width: moderateScale(60), marginTop: moderateScale(4)}}>
        <Text style={styles.Text}>{title}</Text>
      </View>
    </View>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  Button: {
    width: moderateScale(60),
    height: moderateScale(60),
    backgroundColor: '#DEF1DF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  Text: {
    fontSize: 12,
    fontWeight: '900',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
