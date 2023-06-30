import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper';



const Home = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

  
    return (
        <View>
            <Text style={styles.home}>Home</Text>
            
<List.Section title="Vehicles">
            <List.Accordion
                title="Air Planes"
                left={props => <List.Icon {...props} icon="folder" />}>
                <List.Item title="Fighter Jets" />
                <List.Item title="Passenger Jets" />
            </List.Accordion>

            <List.Accordion
                title="Cars"
                left={props => <List.Icon {...props} icon="car" />}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title="Rolls Royce" />
                <List.Item title="Fortuner" />
            </List.Accordion>
            </List.Section>

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
