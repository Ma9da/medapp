import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const ProductItem = () => {
    return (
        <View style={styles.infoBox}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.ProductImg}
                    source={require("../assets/images/product.png")}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.darkTitle}>MartiDerm Flash 5 Ampoules</Text>
                <Text style={styles.darkText}>
                    Rorem ipsum dolor sit amet, consectetur adipiscing....
                </Text>
                <View style={styles.productDetails}>
                    <View style={styles.productDetail}>
                        <Text style={styles.darkText}>Quantity</Text>
                        <Text style={styles.darkBoldText}>1</Text>
                    </View>
                    <View style={styles.productDetail}>
                        <Text style={styles.darkText}>Price</Text>
                        <Text style={styles.darkBoldText}>200 NIS</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    imgContainer: {
        width: "20%",
    },
    infoContainer: {
        width: "80%",
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
    darkTitle: {
        color: Colors.textDark,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: Colors.mainFontFamily,
    },
    darkText: {
        color: Colors.textDark,
        fontSize: 14,
        fontFamily: Colors.mainFontFamily,
    },
    darkBoldText: {
        color: Colors.textDark,
        fontSize: 14,
        fontFamily: Colors.mainFontFamily,
        fontWeight: "700",
    },
    ProductImg: {
        width: 37,
        resizeMode: "contain",
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
export default ProductItem;
