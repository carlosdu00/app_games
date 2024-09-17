import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <Text>09/2024</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },
});