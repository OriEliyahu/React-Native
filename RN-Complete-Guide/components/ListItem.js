import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
            <Button title="Delete" onPress={() => props.deleteGoal(props.title)} />
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default ListItem;