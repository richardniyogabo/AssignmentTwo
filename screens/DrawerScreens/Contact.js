import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { data } from '../data';

const Contact = () => {

    const renderItem = ({item}) => {    
        return <Image source={{ uri: item.image }} style={{
            width: 90,
            height: 90,
            borderRadius: 10,
            margin: 3
        }} />
    }

    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',   
        }}>
            <FlatList
                data={data}
                contentContainerStyle={{flexDirection : "row", flexWrap : "wrap", alignItems: 'center', justifyContent: 'center'}}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
            />
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})