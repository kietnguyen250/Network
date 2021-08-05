import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid, Image,YellowBox, LogBox } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import firebaseConfig from '../../database/firebase';
import ImagePicker from 'react-native-image-crop-picker';


const Insert = () => {
    
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [material, setMaterial] = useState();
    const [image_url, setImage_url] = useState('https://cdn3.yame.vn/pimg/ao-khoac-du-logo-10-ver1-0020029/347de3de-c234-1b00-c8d4-0017997ecae2.jpg?w=540&h=756');
    const [category_id, setCategory_id] = useState(1);

    const chooseFile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            console.log(image.path);
            setImage_url(image.path);
        });

    };

    const _uploadImage = async (nameImg, uri) => {
        const path = 'images/' + nameImg + '.jpg';
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebaseConfig.storage().ref(path).put(file);

            upload.on(
                'state_changed',
                (snapshot) => { },
                (err) => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                    ToastAndroid.show('Upload success!', ToastAndroid.SHORT);

                }
            );
        });
    };

    const _insert = async (name, price, quantity, material, image_url, category_id) => {
        const remoteUri = await _uploadImage(Date.now(), image_url);
        if (name == null || price == null || quantity == null || material == null) {
            console.log('Vui lòng nhập đủ!');
            ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
        } else {
            
            var Data = {
                name: name,
                price: price,
                quantity: quantity,
                material: material,
                image_url: remoteUri,
                category_id: category_id
            };

            fetch('http://10.0.2.2:8088/views/product_insert.php', {
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
                    navigation.navigate('Tabs');
                    console.log('Đã thêm sản phẩm!');
                    ToastAndroid.show('Đã thêm sản phẩm!', ToastAndroid.SHORT);
                });
            // .catch(error => console.error('>>>>>>>>', error));
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>ADD SẢN PHẨM</Text>
            </View>
            <View style={styles.formInsert}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value={price}
                    onChangeText={text => setPrice(text)}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quantity"
                    value={quantity}
                    onChangeText={text => setQuantity(text)}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Material"
                    value={material}
                    onChangeText={text => setMaterial(text)}
                />

                <View style={styles.viewImg}>
                    <Image style={styles.img} source={{uri: image_url}} width={200} height={150} />
                    <Pressable style={styles.btnImg} onPress={() => chooseFile()}>
                        <Text style={styles.btnText}>Choose</Text>
                    </Pressable>
                </View>

                <Pressable
                    onPress={() => _insert(name, price, quantity, material, image_url, category_id)}
                    style={styles.addBtn}>
                    <Text style={styles.addText}>ADD PRODUCT</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default Insert;

