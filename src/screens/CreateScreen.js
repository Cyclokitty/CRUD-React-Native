import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    
    return (
        <View>
            <Text style={styles.title}>Create Screen</Text>
            <TextInput></TextInput>
            <TextInput></TextInput>
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

export default CreateScreen;