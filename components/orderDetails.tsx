import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const OrderDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoBox}>
                <View style={styles.w50}>
                    <Text style={[styles.orderLightText, styles.gap]}>Order Status</Text>
                    <Text style={[styles.orderLightText, styles.gap]}>Order ID</Text>
                    <Text style={[styles.orderLightText, styles.gap]}>Date & Time</Text>
                </View>
                <View style={[styles.w50, styles.alignEnd]}> 
                    <View style={[styles.completedStatus, styles.gap]}>
                        <Text style={styles.completedText}>completed</Text>
                    </View>
                    <Text style={[styles.orderDarkText, styles.textRight, styles.gap]}>#756524</Text>
                    <Text style={[styles.orderDarkText, styles.textRight, styles.gap]}>10/09/2024 11:31 AM</Text>
                </View>
            </View>
            <View style={styles.infoBox}>
                <View style={styles.w20}>
                    <Image style={styles.ProductImg} source={require('../assets/images/product.png')} />
                </View>
                <View style={[styles.w80]}>
                    <Text style={styles.darkTitle}>MartiDerm Flash 5 Ampoules</Text>
                    <Text style={styles.darkText}>Rorem ipsum dolor sit amet, consectetur adipiscing....</Text>
                    <View style={styles.productDetails}>
                        <View style={styles.productDetail}>
                            <Text style={[styles.darkText]}>Quantity</Text>
                            <Text style={[styles.darkText, styles.fw700]}>1</Text>
                        </View>
                        <View style={styles.productDetail}>
                        <Text style={[styles.darkText]}>Price</Text>
                        <Text style={[styles.darkText, styles.fw700]}>200 NIS</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.infoBox, styles.columnDirection]}>
                <Text style={[styles.gap, styles.orderDarkText, styles.fw700]}>Billing Address</Text>
                <Text style={[styles.gap, styles.orderDarkText]}>2118 Thornridge Cir. Syracuse, Connecticut 35624</Text>
                <Text style={[styles.gap, styles.orderDarkText, styles.fw700]}>Mobile Number</Text>
                <Text style={[styles.gap, styles.orderDarkText]}>+12015548895</Text>
                <Text style={[styles.gap, styles.orderDarkText, styles.fw700]}>Total Paid By Customer</Text>
                <View style={[styles.gap, styles.completedStatus, styles.deliveryInfoW]}>
                    <Text style={[styles.completedText, styles.fw400]}>Cash on Delivery</Text>
                </View>
            </View>
            <View style={[styles.infoBox, styles.columnDirection]}>
                <Text style={[styles.gap, styles.orderDarkText, styles.fw700]}>Payment Method
                </Text>
                <Text style={[styles.gap, styles.orderLightText, styles.fw500]}>
                Cash on delivery
                </Text>
            </View>
            <View style={[styles.infoBox, styles.columnDirection]}>
                <Text style={[styles.gap, styles.orderDarkText, styles.fw700]}>Order Summary</Text>
                <View style={[styles.productDetails]}>
                    <Text style={[styles.orderLightText, styles.gap]}>Subtotal (3 Itmes)</Text>
                    <Text style={[styles.orderDarkText, styles.fw600]}>100 NIS</Text>
                </View>
                <View style={[styles.productDetails]}>
                    <Text style={[styles.orderLightText, styles.gap]}>Shipping Fee</Text>
                    <Text style={[styles.orderDarkText, styles.fw600]}>50 NIS</Text>
                </View>
                <View style={[styles.productDetails]}>
                <Text style={[styles.orderLightText, styles.gap, styles.completedText, styles.textLeft, styles.fs14, styles.fw400]}>Coupon</Text>
                <Text style={[styles.completedText, styles.fw600, styles.fs14]}>-10 NIS</Text>
                </View>
                <View style={[styles.productDetails]}>
                    <Text style={[styles.orderLightText, styles.gap]}>VAT</Text>
                    <Text style={[styles.orderDarkText, styles.fw600]}>100 NIS</Text>
                </View>
                <View  style={[styles.hr, styles.gap]}></View>
                {/* <hr/> */}
                <View style={[styles.productDetails]}>
                    <Text style={[styles.orderLightText, styles.gap]}>Total</Text>
                    <Text style={[styles.orderDarkText, styles.fw600]}>200 NIF</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    gap:{
        marginBottom: 16,
    },
    alignEnd: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textLeft:{
        textAlign: 'left',
    },
    textRight:{
        textAlign: 'right',
    },
    w50: {
        width: '50%',
    },
    w20: {
        width: '20%',
    },
    w80: {
        width: '80%',
    },
    fw600:{
        fontWeight: '600',
    },
    fw500:{
        fontWeight: '500',
    },
    fw700:{
        fontWeight: '700',
    },
    fw400:{
        fontWeight: '400',
    },
    wAuto:{
        width: 'auto',
    },
    fs14:{
        fontSize: 14,
    },
    hr:{
        height:1,
        backgroundColor: '#AFBACA'
    },
    deliveryInfoW:{
        minWidth: 119,
        maxWidth: 150,
    },
    columnDirection: {
        flexDirection: 'column',
    },
    container:{
        margin: 16, 
        flex:1
    },
    infoBox: {
        borderColor: '#CED7DD',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 16,
        borderRadius: 6,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    orderLightText: {
        color: '#9FA9B2',
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    orderDarkText: {
        color: '#484848',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '600',
    },
    darkTitle: {
        color: '#292D32',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    darkText: {
        color: '#292D32',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    completedStatus: {
        backgroundColor: '#18CF6D4D',
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        width: 100,

    },
    completedText: {
        textAlign: 'center',
        fontWeight: '500',
        color:'#0E8345',
        fontSize: 12,
    },
    ProductImg:{
        width: 37,
        // height: 'auto',
        resizeMode: 'contain',
    },
    productDetails:{
        display:'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    productDetail:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})

export default OrderDetails;
