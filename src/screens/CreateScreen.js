import React, { useContext,  } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm 
            initialValues={{  title: '', content: ''}}
            label='Enter'
            onSubmit={(title, content) => { addBlogPost(title, content, () => navigation.navigate('Index'))}}
        />
    )   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 5,
    },
    
});

export default CreateScreen;