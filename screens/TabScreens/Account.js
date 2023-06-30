import React, {useRef} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Account = () => {
    return (
        <View>
            <Text style={styles.account}>Cards</Text>
            
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
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardContainer: {
        width: '92%',
        height: '70%',
      },
      card: {
        width: '100%',
        height: '100%',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.07,
        shadowRadius: 3.3,
      },
      cardImg: {
        width: 300,
        height: 400,
        alignSelf: 'center',
        borderRadius: 13,
      },
})
