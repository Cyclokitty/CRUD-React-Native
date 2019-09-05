import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>CRUD</Text>
            <Text style={styles.subTitleText}>Blog Maker App Thingy</Text>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList 
                data={state}
                renderItem={({item}) => {
                    return <Text style={styles.listStyleItem}>{item.title}</Text>
                }}
                keyExtractor={(item) => item.title}
            />
        </View>
    )
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFEF',
        padding: 5,
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
    },
    listStyleItem: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#F26430',
        padding: 10,
        color: '#2A2D34'
    }
});

export default IndexScreen;