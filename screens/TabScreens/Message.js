import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const Message = ({ navigation }) => {
    const data = [
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            product: "Red Hover Nike",
            price: "20,000 RWF",
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
        },

    ];

    const [refreshing, setRefreshing] = useState(false);
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        if (refreshing) {
          // do your heavy or asynchronous data fetching & update your state
          setMessages([...messages, {
            product: "Red Canner Shoes",
            price: "10,002 RWF",
            image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80'
          }]);
          // set the refreshing back to false
          setRefreshing(false);
        }
      }, [refreshing]);
    
    return (
        <View style={{
            paddingBottom: 80,
        }}>
            <Text style={styles.product}>Products</Text>
            <FlatList 
                data={messages}
                refreshing={refreshing}
                onRefresh={() => setRefreshing(true)}
                renderItem={({item, idx}) => 
                <TouchableOpacity  key={idx} style={{
                    width: '90%',
                    height: 90,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 10,
                }}>
                    <Image 
                        source={{ uri: item.image }}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 20,

                        }}
                    />
                    <View>
                        <Text style={{
                            fontSize: 18,
                            color: '#000',
                            paddingLeft: 10
                        }}>{item.product}</Text>
                         <Text style={{
                            fontSize: 14,
                            color: '#4c4c4c',
                            paddingLeft: 10
                        }}>{item.price}</Text>
                    </View>
                </TouchableOpacity>}
            />
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    product: {
        fontSize: 40,
        marginTop: 0,
        fontWeight: 'bold',
        textAlign: 'center',

    }
})
