import React, { useEffect } from 'react';
import api from 'api/index';
import { useState } from 'react';
import { Text, FlatList } from 'react-native';
import { ProductCard, Div } from 'shared/components/ui';
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
    <Div flex={1} paddingHorizontal={constants.spacing.md} backgroundColor={constants.colors.secondary}>
        {loading ? (
          <Text style={{ color: constants.colors.white }}>Loading products...</Text>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Div marginTop={constants.spacing.md}>
                <ProductCard product={item} />
              </Div>
            )}
            ListEmptyComponent={
              <Text style={{ color: constants.colors.white }}>No products found</Text>
            }
          />
        )}
    </Div>
  );
}
