import { Button, Text, View, StyleSheet } from "react-native";

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is the Home Screen!</Text>
            <Button 
                title="Clicker"
                onPress={() => navigation.navigate('Clicker')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default Home;