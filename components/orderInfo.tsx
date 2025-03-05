import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const OrderInfo = () => {
    return (
        <View style={styles.infoBox}>
            <View style={styles.infoTitles}>
                <Text style={styles.orderLightText}>
                    Order Status
                </Text>
                <Text style={styles.orderLightText}>Order ID</Text>
                <Text style={styles.orderLightText}>
                    Date & Time
                </Text>
            </View>
            <View style={styles.infoValues}>
                <View style={styles.completedStatus}>
                    <Text style={styles.completedText}>completed</Text>
                </View>
                <Text
                    style={styles.orderDarkText}
                >
                    #756524
                </Text>
                <Text
                    style={styles.orderDarkText}
                >
                    10/09/2024 11:31 AM
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    infoTitles: {
        width: "50%",
    },
    infoValues:{
        width: "50%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    infoBox: {
        borderColor: Colors.borderLight,
        borderWidth: 1,
        borderStyle: "solid",
        padding: 16,
        borderRadius: 6,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    orderLightText: {
        color: Colors.textLight,
        fontFamily: "Roboto",
        fontSize: 14,
        marginBottom: 16,
    },
    orderDarkText: {
        color: Colors.textDark,
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "right",
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
    },
    completedText: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.textCompelete,
        fontSize: 12,
    },
});
export default OrderInfo;
