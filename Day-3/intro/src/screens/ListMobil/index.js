import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import List from '../../component/List';
import {moderateScale} from 'react-native-size-matters';

const ListMobil = () => {
  return (
    <View style={styles.pages}>
      <ScrollView>
        <Text style={styles.Text}>Daftar Mobil</Text>
        <View style={styles.List}>
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
export default ListMobil;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
  },

  Text: {
    fontSize: 18,
    fontWeight: '900',
    marginVertical: moderateScale(12),
    color: 'black',
  },

  List: {
    marginHorizontal: moderateScale(12),
  },
});
