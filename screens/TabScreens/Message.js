import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Message = () => {
    return (
        <View>
            <Text style={styles.message}>Messages</Text>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    message: {
        fontSize: 40,
        marginTop: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
