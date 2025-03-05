import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderInfo from "./orderInfo";
import ProductItem from "./productItem";
import BillingDetails from "./billingDetails";
import OrderSummary from "./orderSummary";
const OrderDetails = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <OrderInfo />
                    <ProductItem />
                    <BillingDetails />
                    <OrderSummary />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 16,
        flex: 1,
    },
});

export default OrderDetails;
