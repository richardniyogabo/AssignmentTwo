import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Home = () => {
    
  
    return (
        <View>
            <Text style={styles.home}>Home</Text>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {
        fontSize: 40,
        marginTop: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
