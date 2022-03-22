/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Header, Avatar} from '../../assets/images';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import ButtonIcon from '../../component/ButtonIcon';
import List from '../../component/List';
// import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#D3D9FD',
            height: moderateScale(120),
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(6),
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: moderateScale(13),
                color: 'black',
              }}>
              Hi, Dani
            </Text>
            <Text
              style={{
                marginTop: moderateScale(3),
                fontSize: moderateScale(20),
                fontWeight: '500',
                color: 'black',
              }}>
              Bandung
            </Text>
          </View>
          <View>
            <FastImage
              source={Avatar}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <View>
          <Image source={Header} style={styles.header} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: moderateScale(9),
          }}>
          <ButtonIcon title="Sewa Mobil" />
          <ButtonIcon title="Oleh-oleh" />
          <ButtonIcon title="Penginapan" />
          <ButtonIcon title="Wisata" />
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(17),
            marginVertical: moderateScale(12),
          }}>
          <Text style={{fontWeight: '900', color: 'black', fontSize: 17}}>
            Daftar Mobil Pilihan
          </Text>

          <List
            Merk="Xenia"
            TotalPenumpang={4}
            TotalKoper={2}
            Harga="Rp.250.000"
          />
          <List
            Merk="Xenia"
            TotalPenumpang={4}
            TotalKoper={2}
            Harga="Rp.250.000"
          />
          <List
            Merk="Xenia"
            TotalPenumpang={4}
            TotalKoper={2}
            Harga="Rp.250.000"
          />
          <List
            Merk="Xenia"
            TotalPenumpang={4}
            TotalKoper={2}
            Harga="Rp.250.000"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginLeft: moderateScale(9),
    marginTop: moderateScale(-27),
    width: moderateScale(360),
    height: moderateScale(150),
    borderRadius: moderateScale(10),
  },
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
  },
});
