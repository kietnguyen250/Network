import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './style'

const Detail = ({ route }) => {
    const { item: product } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thông Tin Chi Tiết</Text>
            <Image
                style={styles.thumb}
                height={300}
                source={{
                    uri: product.image_url,
                }}
            />
            <View style={styles.info}>
                <Text style={styles.txtInfo}>Name: {product.name}.</Text>
                <Text style={styles.txtInfo}>{product.price}$</Text>
                <Text style={styles.txtInfo}>Quantity: {product.quantity}.</Text>
                <Text style={styles.txtInfo}>Material: {product.material}.</Text>
                
            </View>
        </View>
    )
}

export default Detail

