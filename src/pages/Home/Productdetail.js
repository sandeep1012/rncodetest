import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, Button } from 'react-native'

const Productdetail = (props) => {
    const prdData = props.route.params.productdetail
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Button title='Back' onPress={()=>props.navigation.navigate('Home')}/> 
                <View style={styles.card}>
                    {/* <View style={styles.Header}>
                        <Text style={styles.HeaderTitle}>Product Detail</Text>
                    </View> */}
                    <Image source={{ uri: prdData.image }} style={styles.cardImg} />
                    <Text style={styles.InfoTitle}>{prdData.name}</Text>
                    <Text style={styles.InfoPrice}>£ {prdData.price}</Text>
                    <Text style={styles.InfoDesc}>{prdData.description}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const cardWidth = deviceWidth - 20;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    card: {
        marginVertical: 8,
        width: cardWidth,
        height: 'auto',
    },
    cardImg: {
        width: cardWidth,
        height: cardWidth * (3 / 4),
    },
    Header: {
        backgroundColor: '#dadbdd',
        padding: 10,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    InfoTitle: {
        color: '#000',
        fontSize: 16,
    },
    InfoPrice: {
        fontWeight: '700',
        color: '#ffa15d'
    },
    InfoDesc: {
        fontWeight: '700',
        color: 'grey'
    },
})

export default Productdetail
