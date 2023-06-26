import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Account = () => {
    return (
        <View>
            <Text style={styles.account}>Accounts</Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    account: {
        fontSize: 40,
        marginTop: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
