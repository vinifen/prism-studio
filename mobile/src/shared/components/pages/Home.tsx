import React, { useEffect } from 'react';
import api from 'api/index';
import { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { PrimaryButton, SecondaryButton, ProductCard } from 'shared/components/ui';
import FormInput from '../ui/FormInput';
import { useForm } from 'react-hook-form';
import { ProductType } from 'shared/types/ProductTypes';
import { constants } from 'shared/styles/contants';

export default function Home() {
  const { 
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange"
  });

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/products');
        setProducts(response.data.data);
        console.log("Products from API:", response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: constants.spacing.md }}>
      <FormInput 
        control={control} 
        errors={errors} 
        inputName="example" 
        placeholder="Digite algo aqui..."
      />
      
      <View style={{ marginTop: constants.spacing.md }}>
        <PrimaryButton 
          title='Primary Button' 
          onPress={() => console.log('Primary pressed')}
        />
      </View>
      
      <View style={{ marginTop: constants.spacing.sm }}>
        <SecondaryButton 
          title='Secondary Button' 
          onPress={() => console.log('Secondary pressed')}
        />
      </View>

      <View style={{ marginTop: constants.spacing.lg, flex: 1 }}>
        {loading ? (
          <Text style={{ color: constants.colors.white }}>Carregando produtos...</Text>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: constants.spacing.md }}>
                <ProductCard product={item} />
              </View>
            )}
            ListEmptyComponent={
              <Text style={{ color: constants.colors.white }}>Nenhum produto encontrado</Text>
            }
          />
        )}
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
