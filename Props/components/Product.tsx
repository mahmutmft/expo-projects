import {View, Text, Image, FlatList} from 'react-native'
import React from 'react'
import styles from "../util/style"

interface Products {
    productName: string;
    productImage: string;
    productPrice: number;
    productDescription: string;
    isFeatured: boolean;
}

const Product = ({productName, productImage, productPrice, productDescription, isFeatured}: Products) => {
    const featuredStatus = isFeatured ? "Featured" : "Not Featured";
    return (
        <View style={styles.view}>
            <View>
                <Image
                    style={styles.image}
                    source={{uri: productImage}}/>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textName}>{productName}</Text>
                <Text style={styles.text}>{productPrice}</Text>
                <Text style={styles.feature}>{featuredStatus}</Text>
                <Text style={styles.text}>{productDescription}</Text>
            </View>
        </View>
    )
}
export default Product
