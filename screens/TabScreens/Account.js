import React, {useRef} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Avatar, Button, Card } from 'react-native-paper';
import CardsSwipe from 'react-native-cards-swipe';

const cardsData = [
    { src: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80' },
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60' },
    { src: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80' },
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60' },

  ];

const Account = () => {
    return (
        <View>
            <Text style={styles.account}>Cards</Text>
            <CardsSwipe
                cards={cardsData}
                cardContainerStyle={styles.cardContainer}
                renderCard={(card) => (
                <View style={styles.card}>
                    <Image
                    style={styles.cardImg}
                    source={{ uri: card.src }}
                    />
                </View>
                )}
            />
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
