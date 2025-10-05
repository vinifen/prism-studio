import React, { useEffect } from 'react'
import api from 'api/index';
import { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { GradientText, GradientBorderBox, GradientBackground, Div } from 'shared/components/ui';

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
      <GradientBorderBox
        width={250}
        height={130}
        borderLeftWidth={20}
        borderTopLeftRadius={20}
        borderBottomLeftRadius={20}
        borderWidth={10}
        backgroundColor="white"
      >
        <Text style={{ color: 'black', fontSize: 16 }}>Teste de borda gradiente</Text>
      </GradientBorderBox>
      <GradientBackground borderColor='black' borderRightColor='blue' borderRadius={15} borderWidth={5}>
        <Div><GradientText>Texto com fundo gradiente</GradientText></Div>
        <Text style={{ color: 'white' }}>Texto com fundo gradiente</Text>
      </GradientBackground>
      <Div backgroundColor='white' borderBottomRightRadius={20} borderColor="blue" padding={10} margin={10} borderRadius={10}>
        <Text>Conteúdo dentro do Div</Text>
      </Div>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
