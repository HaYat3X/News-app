import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const News = ({ img, title, linkText, onPress }) => {
  var date = new Date(linkText);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var dateTime = year + '年' + month + '月' + day + '日';

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.mozibox}>
        <Text numberOfLines={3} style={styles.mainText}>
          {title}
        </Text>
        <Text style={styles.subText}>{dateTime}</Text>
      </View>
      <View style={styles.imgbox}>
        <Image
          style={{ width: 120, height: 120, borderRadius: 10 }}
          source={{ url: img }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default News;

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 5,
  },

  mozibox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
  },

  imgbox: {
    width: 120,
  },

  mainText: {
    fontSize: 16,
    fontWeight: Platform.OS === 'android' ? 'normal' : '900',
  },

  subText: {
    fontSize: 12,
    marginTop: 10,
  },
});
