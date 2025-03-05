import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BillingDetails = () => {
    return (
        <>
            <View style={styles.infoBox}>
                <Text style={styles.billingTitle}>
                    Billing Address
                </Text>
                <Text style={styles.orderDarkText}>
                    2118 Thornridge Cir. Syracuse, Connecticut 35624
                </Text>
                <Text style={styles.billingTitle}>
                    Mobile Number
                </Text>
                <Text style={styles.orderDarkText}>+12015548895</Text>
                <Text style={styles.billingTitle}>
                    Total Paid By Customer
                </Text>
                <View
                    style={styles.completedStatus}
                >
                    <Text style={styles.completedText}>
                        Cash on Delivery
                    </Text>
                </View>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.billingTitle}>
                    Payment Method
                </Text>
                <Text style={styles.orderLightText}>
                    Cash on delivery
                </Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    billingTitle:{
        marginBottom: 16,
        fontWeight: "700",
        color: Colors.textDark,
        fontFamily: Colors.mainFontFamily,
        fontSize: 14,
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
    orderLightText: {
        color: Colors.textLight,
        fontFamily: Colors.mainFontFamily,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 16,
    },
    orderDarkText: {
        color: Colors.textDark,
        fontFamily: Colors.mainFontFamily,
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 16,
    },
    completedStatus: {
        backgroundColor: Colors.bgCompelete,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        width: 100,
        marginBottom: 16,
        minWidth: 119,
        maxWidth: 150,
    },
    completedText: {
        textAlign: "center",
        color: Colors.textCompelete,
        fontSize: 12,
    },
});
export default BillingDetails;
