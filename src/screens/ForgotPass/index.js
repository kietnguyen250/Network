import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Forgot = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();

  const _send = email => {
    if (email == null) {
      console.log('Vui lòng nhập đủ!');
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else {
      var Data = {
        email: email,
        password: '4444',
      };

      fetch('http://10.0.2.2:8088/views/user_forgot_password.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(response => {
          console.log('response: ');
          console.log(response);
          console.log('Please check your email!');
          ToastAndroid.show('Please check your email!', ToastAndroid.SHORT);
          //   if (response.is_auth == true) {
          //     navigation.navigate('Home');
          //     console.log('Đăng nhập thành công!');
          //     ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
          //   } else {
          //     console.log('Đăng nhập thất bại!');
          //     ToastAndroid.show('Đăng nhập thất bại!', ToastAndroid.SHORT);
          //   }
        })
        .catch(error => console.error('>>>>>>>>', error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Forgot</Text>
        <Text style={styles.textTitle}>Password.</Text>
        <View style={styles.line}></View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Pressable onPress={() => _send(email)} style={styles.login}>
        <Text style={styles.textLogin}>SEND</Text>
      </Pressable>

      <View style={styles.viewSignUp}>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignUp}>Back to Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Forgot;
