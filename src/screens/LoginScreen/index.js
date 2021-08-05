import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const _login = (email, password) => {
    if (email == null || password == null) {
      console.log('Vui lòng nhập đủ!');
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else {
      var Data = {
        email: email,
        password: password,
      };

      fetch('http://10.0.2.2:8088/views/user_login.php', {
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
          if (response.is_auth == true) {
            navigation.navigate('Home');
            console.log('Đăng nhập thành công!');
            ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
          } else {
            console.log('Đăng nhập thất bại!');
            ToastAndroid.show('Đăng nhập thất bại!', ToastAndroid.SHORT);
          }
        })
        .catch(error => console.error('>>>>>>>>', error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Welcome</Text>
        <Text style={styles.textTitle}>Back.</Text>
        <View style={styles.line}></View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Pressable
        onPress={() => navigation.navigate('Forgot')}
        style={styles.forgot}>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </Pressable>

      <Pressable onPress={() => _login(email, password)} style={styles.login}>
        <Text style={styles.textLogin}>SIGN IN</Text>
      </Pressable>

      <View style={styles.viewSignUp}>
        <Text>New User? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
