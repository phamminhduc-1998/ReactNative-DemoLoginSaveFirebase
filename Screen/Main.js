import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Main({ route, navigation }) {
    //lấy giá trị của biến name, address  được truyền sang
    const { ARR} = route.params;
    return (
        <View style={styles.container}>
            <FlatList style={{ flex: 1, }}
                data={ARR}
                keyExtractor={(item) => {
                    return "ok:" + item.name
                }}
                renderItem={({ item }) => (

                    <View key={`item_${item.name}`} style={{ borderWidth: 1, margin: 8, width: 250, borderRadius: 5, }}>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.email}</Text>
                        </View>

                    </View>

                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
