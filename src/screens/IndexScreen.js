import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const IndexScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}>CRUD</Text>
        <Text style={styles.subTitleText}>Blog Maker App Thingy</Text>
        
        </View>
    )
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFEF',
    }, 
    titleText: {
        color: '#6761A8',
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    subTitleText: {
        color: '#6761A8',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});

export default IndexScreen;