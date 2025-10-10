import React, { useEffect } from 'react'
import api from 'api/index';
import { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { GradientText, GradientBorderBox, GradientBackground, Div, PrimaryButton, SecondaryButton } from 'shared/components/ui';
import { H1 } from '../ui/Titles';
import FormInput from '../ui/FormInput';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { 
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange"
  });

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
      <Image source={require("assets/images/prism-studio.png")} style={{ width: 100, height: 100 }} resizeMode="contain"/>
      
      <View>
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
        <View style={{alignItems: 'flex-end'}}>
          <GradientText fontSize={30} fontWeight='bold'>Texto </GradientText>
        </View>
      </GradientBorderBox>
      <GradientBackground borderColor='black' borderRightColor='blue' borderRadius={15} borderWidth={5}>
        <View style={{alignItems: 'center'}}>
          <GradientText fontSize={20}>Texto </GradientText>
          </View>
        <Text style={{ color: 'white' }}>Texto com fundo gradiente</Text>
      </GradientBackground>
      <Div backgroundColor='white' borderBottomRightRadius={20} borderColor="blue" padding={10} margin={10} borderRadius={10}>
        <Text>Conteúdo dentro do Div</Text>
      </Div>
      <H1>ASDF</H1>
      <FormInput 
        control={control} 
        errors={errors} 
        inputName="example" 
        placeholder="Digite algo aqui..."
      />
      <PrimaryButton title='BUTTON' onPress={() => console.log('Button pressed')} isDisabled={true}/>
      <SecondaryButton title='BUTTON' onPress={() => console.log('Button pressed')} isDisabled={true}/>

    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
