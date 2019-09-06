import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    
    return (
        <View>
            <Text style={styles.title}>Show Screen</Text>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.subTitle}>{blogPost.id}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        color: '#6761A8',
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    subTitle: {
        color: '#6761A8',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});

export default ShowScreen;