import React, { useEffect } from 'react'
import api from 'api/index';
import { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { GradientText, GradientBorderBox, GradientBackground } from 'shared/components/ui';

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
      <GradientBorderBox borderRadius={0} padding={10} children={
        <View style={{alignItems: 'center', backgroundColor: '#fff', padding: 20}}>
          <Text>Conteúdo dentro da borda com gradiente</Text>
        </View>
      } />
      <GradientBackground borderRadius={15} padding={20}>
        <Text style={{ color: 'white' }}>Texto com fundo gradiente</Text>
      </GradientBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
