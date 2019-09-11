import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity,  View} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    

    return(
        <View style={styles.container}>
            <TextInput style={styles.title}
                value={blogPost.title} />
            <TextInput style={styles.content}
                value={blogPost.content} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 5,
    },
    title: {
        color: '#6761A8',
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    content: {
        color: '#2A2D34',
        fontSize: 18,
        alignSelf: 'flex-start',
    }
});

export default EditScreen;