import React,  { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Title:</Text>
            <TextInput 
                onChangeText={(text) => setTitle(text)}
                value={title}
                style={styles.inputTitle}
            />
            <Text style={styles.title}>Enter Content:</Text>
            <TextInput
                onChangeText={(text) => setContent(text)}
                value={content}
                multiline={true}
                style={styles.inputContent}
            />
            <TouchableOpacity
                onPress={() => {
                    
                }}
                style={styles.saveBtn}
            >
                <Text style={styles.saveBtnText}>Save Blog Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 5,
    },
    title: {
        color: '#6761A8',
        fontSize: 24,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    subTitle: {
        color: '#6761A8',
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    inputTitle: {
        backgroundColor: '#f4f4f2',
        color: '#2A2D34',
        width: '90%',
        alignSelf: 'center', 
    }, 
    inputContent: {
        backgroundColor: '#f4f4f2',
        color: '#2A2D34',
        width: '90%',
        alignSelf: 'center', 
        minHeight: 100,
    },
    saveBtn: {
        padding: 10,
        alignSelf: 'stretch',
        backgroundColor: '#F26430',
        marginTop: 15,
    },
    saveBtnText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
    }
});

export default BlogPostForm;