import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';


export default function Screen1() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Screen 1 </Text>

            <Button title="GO!" onPress={() => {
                navigation.navigate("Screen2");
            }} />

            <SharedElement id={`image`}>
                <Image source={{
                    width: 300,
                    height: 150,
                    uri: 'https://actionseaze.com/wp-content/uploads/2020/02/sunset.jpg'
                }} />
            </SharedElement>
        </View>
    )
}