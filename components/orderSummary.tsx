import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const OrderSummary = () => {
    return (
        <View style={styles.infoBox}>
            <Text style={styles.title}>
                Order Summary
            </Text>
            <View style={styles.productDetails}>
                <Text style={styles.orderLightText}>
                    Subtotal (3 Itmes)
                </Text>
                <Text style={styles.orderDarkText}>100 NIS</Text>
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.orderLightText}>
                    Shipping Fee
                </Text>
                <Text style={styles.orderDarkText}>50 NIS</Text>
            </View>
            <View style={styles.productDetails}>
                <Text
                    style={styles.completedText}>
                    Coupon
                </Text>
                <Text style={styles.compeletedValue}>
                    -10 NIS
                </Text>
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.orderLightText}>VAT</Text>
                <Text style={styles.orderDarkText}>100 NIS</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.productDetails}>
                <Text style={styles.orderLightText}>Total</Text>
                <Text style={styles.orderDarkText}>200 NIF</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    hr: {
        height: 1,
        backgroundColor: Colors.lightBorder,
        marginBottom: 16
    },
    title:{
        color: Colors.textDark,
        fontFamily: Colors.mainFontFamily,
        fontSize: 14,
        marginBottom: 16,
        fontWeight: "700",
    },
    infoBox: {
        borderColor: Colors.borderLight,
        borderWidth: 1,
        borderStyle: "solid",
        padding: 16,
        borderRadius: 6,
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    compeletedValue:{
        textAlign: "center",
        fontWeight: "600",
        color: Colors.textCompelete,
        fontSize: 14,
        marginBottom: 16,
    },
    orderLightText: {
        color: Colors.textLight,
        fontFamily: Colors.mainFontFamily,
        fontSize: 14,
        marginBottom: 16,
    },
    orderDarkText: {
        color: Colors.textDark,
        fontFamily: Colors.mainFontFamily,
        fontSize: 14,
        fontWeight: "600",
    },
    completedText: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.textCompelete,
        fontSize: 14,
        marginBottom: 16,
    },
    productDetails: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    productDetail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
});
export default OrderSummary;
