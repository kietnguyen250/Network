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

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const _register = (email, password, confirm) => {
    if (email == null || password == null || confirm == null) {
      console.log('Vui lòng nhập đủ!');
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else if (password != confirm) {
      console.log('Mật khẩu không trùng khớp!');
      ToastAndroid.show('Mật khẩu không trùng khớp!', ToastAndroid.SHORT);
    } else {
      var Data = {
        email: email,
        password: password,
        confirm_password: confirm,
      };

      fetch('http://10.0.2.2:8088/views/user_register.php', {
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
          navigation.navigate('Login');
          console.log('Đăng kí thành công!');
          ToastAndroid.show('Đăng kí thành công!', ToastAndroid.SHORT);
        });
      // .catch(error => console.error('>>>>>>>>', error));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Create</Text>
        <Text style={styles.textTitle}>Account.</Text>
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
        placeholder="Create Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirm}
        onChangeText={text => setConfirm(text)}
      />

      <Pressable
        onPress={() => _register(email, password, confirm)}
        style={styles.signUp}>
        <Text style={styles.textSignUp}>CREATE ACCOUNT</Text>
      </Pressable>

      <View style={styles.viewSignIn}>
        <Text>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignIn}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
