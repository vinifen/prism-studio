import React, { useEffect } from 'react'
import api from 'api/index';
import { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import GradientText from 'shared/components/ui/GradientText';

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/');
      setData(response.data);
      console.log("Data from API:", response.data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      {data ? (
        <Text>{JSON.stringify(data, null, 2)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
      <Image source={require("assets/images/prism-studio.png")} style={{ width: 100, height: 100 }} />
      
      <View style={{ alignSelf: 'center' }}>
        <GradientText style={styles.textStyle}>Hello world</GradientText>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
