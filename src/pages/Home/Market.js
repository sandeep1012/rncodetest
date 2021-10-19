import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View, Dimensions, Alert, TouchableOpacity } from 'react-native';
import Product from '../../components/Product';

const productData = require('../../assests/products.json')
const category = [...new Set(productData.map(item => item.category))].sort();

const Market = ({ navigation }) => {
    const onProductClick = (data) => {
        //console.log(data.item.image);
        navigation.navigate('Productdetail',
            {
                productdetail: data.item
            }
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.categoryHeader}>
                <Text style={styles.categoryHeaderTitle}>Category</Text>
            </View>
            <FlatList
                horizontal={true}
                data={category}
                renderItem={(detail) => (
                    <View style={styles.categoryMain}>
                        <Text style={styles.ListHeaderTitle}>{detail.item}</Text>
                        <FlatList
                            data={
                                productData.filter((e) => {
                                    return e.category === detail.item;
                                }).sort((a, b) => { return a.order - b.order })
                            }
                            renderItem={(data) => (
                                <TouchableOpacity onPress={() => onProductClick(data)}>
                                    <Product {...data.item} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    },
    container: {
        alignItems: 'center',
    },
    categoryHeader: {
        backgroundColor: '#dadbdd',
        padding: 10,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    categoryHeaderTitle: {
        color: '#000',
        fontSize: 20,
    },
    categoryMain: {
        backgroundColor: '#f1f2f3',
        height: Dimensions.get('window').height - 200,
        width: Dimensions.get('window').width,
        alignItems: 'center'

    },
    ListHeaderTitle: {
        color: '#f2590c',
        fontSize: 22,
        fontWeight: '600'
    },
});

export default Market;
