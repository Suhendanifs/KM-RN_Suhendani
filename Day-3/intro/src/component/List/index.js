import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ImageMobil} from '../../assets/images';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

const List = ({Merk, TotalPenumpang, TotalKoper, Harga}) => {
  return (
    <View style={styles.container}>
      <Image source={ImageMobil} style={styles.Image} />
      <View style={styles.content}>
        <View>
          <Text>{Merk}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 4}}>
          <Feather name="users" size={15} />
          <Text
            style={{
              marginLeft: moderateScale(4),
              marginRight: moderateScale(4),
              fontSize: 14,
            }}>
            {TotalPenumpang}
          </Text>
          <Feather name="briefcase" size={15} />
          <Text style={{marginLeft: moderateScale(4), fontSize: 14}}>
            {TotalKoper}
          </Text>
        </View>
        <Text style={{color: '#5CB85F'}}>{Harga}</Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(98),
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: moderateScale(9),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  Image: {},
});
