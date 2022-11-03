import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import News from '../components/News';
import Constants from 'expo-constants';
import axios from 'axios';

const URI = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApikey}`;

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    alert('Newsを取得しました！');
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URI);
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <News
            img={item.urlToImage}
            title={item.title}
            linkText={item.publishedAt}
            onPress={() => navigation.navigate('詳細ページ', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    marginTop: 10,
  },
});
