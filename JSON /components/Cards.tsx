import {View, Text, FlatList, Image} from 'react-native'
import React from 'react'
import styles from "@/src/util/style";
import {data, products} from '../util/data'

interface Product {
    image: string;
    name: string;
    rating: number;
    price: number;
}

const Cards = () => {
    const renderItem = ({item}: { item: Product }) => {
        return (
            <View
                style={styles.view}
            >
                <Image
                    source={{uri: item.image}}
                    style={styles.image}
                />
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.description}>Rating: {item.rating}</Text>
                <Text style={styles.description}>Price: ${item.price}</Text>
            </View>

        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={renderItem}/>
        </View>
    )
}

export default Cards
