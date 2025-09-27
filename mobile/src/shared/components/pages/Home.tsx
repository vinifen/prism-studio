import React, { useEffect } from 'react'
import { api } from 'src/api/api';
import { useState } from 'react';
import { Text, View } from 'react-native';

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
    </View>
  );
}
