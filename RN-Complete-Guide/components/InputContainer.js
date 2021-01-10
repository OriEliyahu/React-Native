import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const inputContainer = (props) => {
    const [inputText, setInputText] = useState('');

    const onTextChange = (text) => {
        setInputText(text);
    };

    const onAddPress = () => {
        if (!inputText) {
            console.log('empty');
            return;
        }
        props.setGoalsList([...props.goalsList, inputText]);
        setInputText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.textBoxInput}
                onChangeText={onTextChange}
                value={inputText}
            />
            <Button title="ADD" onPress={onAddPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        // borderColor: 'black',
        padding: 5,
        // borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    textBoxInput: {
        width: '80%',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10
    }
});

export default inputContainer;