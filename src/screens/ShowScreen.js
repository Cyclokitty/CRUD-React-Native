import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit')}>
                <Icon 
                name='pencil' 
                size={30} 
                type='foundation' 
                color='#009B72' 
                style={styles.iconStyle}/>
            </TouchableOpacity>   
        )     
    };
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

export default ShowScreen;