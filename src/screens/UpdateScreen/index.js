import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid, Image,YellowBox, LogBox, Alert } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import firebaseConfig from '../../database/firebase';
import ImagePicker from 'react-native-image-crop-picker';


const Update = ({ route }) => {
    const {item: product} = route.params;
    
    LogBox.ignoreAllLogs();
    const navigation = useNavigation();
    const [id, setId] = useState(product.id);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);
    const [material, setMaterial] = useState(product.material);
    const [image_url, setImage_url] = useState(product.image_url);
    const [category_id, setCategory_id] = useState(product.category_id);

    // useEffect(() => {
    //     fetch('http://10.0.2.2:8088/views/product_get_by_id.php', {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //         body: JSON.stringify({id: product.id}),
    //     })
    //       .then(response => response.json())
    //       .then(json => setData(json))
    //   });
    
      console.log(id);

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

    const _update = async (id, name, price, quantity, material, image_url, category_id) => {
        const remoteUri = await _uploadImage(Date.now(), image_url);
        if (name == null || price == null || quantity == null || material == null) {
            console.log('Vui lòng nhập đủ!');
            ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
        } else {
            
            var Data = {
                id: id,
                name: name,
                price: price,
                quantity: quantity,
                material: material,
                image_url: remoteUri,
                category_id: category_id
            };

            fetch('http://10.0.2.2:8088/views/product_update.php', {
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
                    console.log('Updated!');
                    ToastAndroid.show('Updated!', ToastAndroid.SHORT);
                });
            // .catch(error => console.error('>>>>>>>>', error));
        }
    }

    const _del = async (id) => {     
            var Data = {
                id: id,
            };
            fetch('http://10.0.2.2:8088/views/product_delete.php', {
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
                    console.log('Deleted!');
                    ToastAndroid.show('Deleted!', ToastAndroid.SHORT);
                });
            // .catch(error => console.error('>>>>>>>>', error));
        
    }

    const _delete = () =>
    Alert.alert(
      "DELETE",
      "Do you want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => _del(id) }
      ]
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>EDIT SẢN PHẨM</Text>
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
                    onPress={() => _update(id, name, price, quantity, material, image_url, category_id)}
                    style={styles.addBtn}>
                    <Text style={styles.addText}>EDIT PRODUCT</Text>
                </Pressable>

                <Pressable
                    onPress={() => _delete()}
                    style={styles.delBtn}>
                    <Text style={styles.delText}>DELETE PRODUCT</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default Update;

