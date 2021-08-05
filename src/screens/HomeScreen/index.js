import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, Pressable, ToastAndroid, Modal } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Home = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch('http://10.0.2.2:8088/views/product_get_all.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(json => setData(json))
  }, [isFocused]);

  console.log(data);

  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.listContainer} onPress={() => navigation.navigate('Detail', { item: item })}>
        <Image
          style={styles.thumb}
          width={400}
          height={250}
          source={{
            uri: item.image_url,
          }}
        />
        <View style={styles.info}>
          <Text
            style={{
              margin: 8,
              fontSize: 22,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              marginVertical: 8,
              fontFamily: 'NewTegomin.tff',
            }}>
            {item.name}
          </Text>
          {/* <Text style={{marginLeft: 10, color: 'grey' }}>Chất liệu: {props.item.material}</Text> */}
          <View
            style={{
              width: '100%',
              marginLeft: 10,
              marginTop: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Icon name="sack" color={'gray'} size={22} />
            <Text style={{ color: 'gray', fontSize: 17, marginLeft: 3 }}>
              {item.price}$
            </Text>
          </View>

          <Pressable
            style={styles.add_cart}
            onPress={() => navigation.navigate('Update', {item:item})}>
            <Text style={styles.detail}>Edit</Text>
          </Pressable>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Yame</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Pressable style={styles.addBtn} onPress={() => navigation.navigate('Insert')}>
        <Icon name="pencil" color={'white'} size={30} />
      </Pressable>
    </View>
  );
};

export default Home;
