import React, { useState } from 'react'
import { StyleSheet, Text, Modal, View, Image, TouchableOpacity, Pressable } from 'react-native'

const Details = ({ navigation, route }) => {
    const [visible, setVisible] = useState(false);

    const hideDialog = () => setVisible(false);
    return (
        <View>
            <Image
                    source={{
                        uri: route.params.item.image
                    }}
                    style={styles.image}
                />
            <Text
              style={{
                  fontSize: 40,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: 30,
              }}
            >{route.params.item.product}</Text>
            <Text
              style={{
                  fontSize: 20,
                  fontWeight: '300',
                  marginTop: 30,
                  width: '95%',
                  alignSelf: 'center',
                  textAlign: 'justify'
              }}
            >These are nice red shoes which are going to be a game changing, buy them and be unstoppabl.</Text>
            <Text
              style={{
                  fontSize: 40,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: 30,
                  color: 'blue'
              }}
            ><Text style={{
                fontSize: 30,
                  fontWeight: '400',
                  textAlign: 'center',
                  marginTop: 30,
                  color: 'black' 
            }}>Price: </Text>{route.params.item.price}</Text>
            <TouchableOpacity onPress={() => setVisible(true)} style={{
                width: '95%',
                height: 50,
                borderRadius: 10,
                backgroundColor: 'blue',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40,
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                }}>Add to Cart</Text>
            </TouchableOpacity>
            <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Added To Cart</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    image: {
        width: '95%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 20,
        alignSelf: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.6)'
      },
      modalView: {
        margin: 20,
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})
