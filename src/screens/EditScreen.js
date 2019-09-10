import React from 'react';
import { StyleSheet,Text, TouchableOpacity,  View} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Edit Screen</Text>
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