import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'

const Product = (props) => {

    const getPriceView = (price=0, discount=null, discount_type=null) => {
        return (
            //<Text style={styles.cardInfoDiscount}> {parseFloat(parseInt(price) * (parseInt(discount) / 100)).toFixed(2) }</Text>
            //<Text style={styles.cardInfoDiscount}> {parseFloat(discount).toFixed(2)}</Text>
            price === 0 ? <Text style={styles.cardInfoPrice}>Free</Text> :
                discount === null ? <Text style={styles.cardInfoPrice}>£ {parseFloat(price).toFixed(2)}</Text> :
                    discount_type === 'percentage' ?
                    (parseInt(price) - (parseInt(price) * (parseInt(discount) / 100))) ===0 ? <Text style={styles.cardInfoPrice}>Free <Text style={styles.cardInfoDiscount}> {parseFloat(parseInt(price) * (parseInt(discount) / 100)).toFixed(2) }</Text></Text>:
                        <Text style={styles.cardInfoPrice}>£ {parseFloat(parseInt(price) - (parseInt(price) * (parseInt(discount) / 100))).toFixed(2)} <Text style={styles.cardInfoDiscount}> {parseFloat(parseInt(price) * (parseInt(discount) / 100)).toFixed(2) }</Text></Text> :
                        (parseInt(price) - parseInt(discount)) ===0? <Text style={styles.cardInfoPrice}>Free <Text style={styles.cardInfoDiscount}> {parseFloat(discount).toFixed(2)}</Text></Text>:
                        <Text style={styles.cardInfoPrice}>£ {parseFloat(parseInt(price) - parseInt(discount)).toFixed(2)}  <Text style={styles.cardInfoDiscount}> {parseFloat(discount).toFixed(2)}</Text></Text>
        )
    }

    return (
        <View style={styles.card}>
            <Image source={{ uri: props.image }} style={styles.cardImg} />
            <View style={styles.cardInfo}>
                <View style={styles.cardInfoMain}>
                    <View style={styles.cardInfoLeft}>
                        <Text style={styles.cardInfoTitle}>{props.name}</Text>
                        <View>{
                            getPriceView(props.price,props.discount,props.discount_type)
                        }</View>
                    </View>
                    <View style={styles.cardInfoRight}>
                        <Image source={require('../../assests/img_avatar.png')} style={styles.cardAvatar} />
                    </View>
                </View>
                <Text>{props.short_description}</Text>
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const cardWidth = deviceWidth - 20;
const cardRadius = 10;
const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        width: cardWidth,
        height: cardWidth * (3 / 4),
        backgroundColor: 'lightblue',
        borderRadius: cardRadius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5, height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.75,
        elevation: 9
    },
    cardImg: {
        width: cardWidth,
        height: cardWidth * (3 / 4),
        borderRadius: cardRadius,
    },
    cardAvatar: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    cardInfo: {
        backgroundColor: 'grey',
        height: 'auto',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: cardRadius,
        borderBottomRightRadius: cardRadius,
        opacity: 0.9,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    cardInfoMain: {
        flexDirection: 'row',
    },
    cardInfoLeft: { flex: 4 },
    cardInfoRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInfoTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#dddee1'
    },
    cardInfoPrice: {
        fontWeight: '700',
        color: '#fff'
    },
    cardInfoDiscount: {
        textDecorationLine: 'line-through',
        textDecorationStyle:'solid',
        color:"#ffa15d"
    }
})

export default Product

