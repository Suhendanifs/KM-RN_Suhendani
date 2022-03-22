/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Park} from '../../assets/images';
import {moderateScale} from 'react-native-size-matters';

const Akun = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: 'black',
          marginHorizontal: 12,
          marginVertical: 15,
        }}>
        Akun
      </Text>
      <View style={styles.header}>
        <Image source={Park} />
        <Text style={{textAlign: 'center', width: '80%'}}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </Text>
        <TouchableOpacity style={styles.Btn}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    marginTop: moderateScale(9),
    width: moderateScale(81),
    height: moderateScale(36),
    backgroundColor: '#5CB85F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
});
