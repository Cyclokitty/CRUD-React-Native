import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
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
                    return  <View style={styles.listStyle}>
                        <Text style={styles.listStyleText}>{item.title}</Text>
                        <TouchableOpacity
                            onPress={() => console.log(item.id)}
                        >
                            <Icon 
                                name='trash'
                                size={24}
                                type='foundation'
                                color='#009B72'
                            />
                        </TouchableOpacity>
                    </View>
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
    listStyle: {   
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f4f4f2',
        padding: 10,  
        marginBottom: 10,      
    },
    listStyleText: {
        fontSize: 20,
        color: '#2A2D34'
    },
});

export default IndexScreen;