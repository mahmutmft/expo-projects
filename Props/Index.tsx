import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {data, products} from '../util/data';
import Product from "@/src/components/Product";

export default function Index() {
    return <FlatList data={products} renderItem={({item}) => (
        <Product productName={item.productName} productImage={item.productImage} productPrice={item.productPrice}
                 productDescription={item.productDescription} isFeatured={item.isFeatured}/>
    )}/>
}
