import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Clicker() {
    const [clicks, setClicks] = useState(0);
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clicks: {clicks}</Text>
            <Button 
                onPress={() => setClicks(clicks + 1)}
                title="Add Click"
            />
            <Button 
                onPress={() => setClicks(clicks - 1)}
                title="Decrease"
                color="#E75D42"
            />
            <Button 
                onPress={() => setClicks(0)}
                title="Reset"
                color="#000"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginBottom: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Clicker;