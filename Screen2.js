import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';



export default function Screen2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SharedElement id={`image`}>
                <Image source={{

                    width: 500,
                    height: 250,
                    uri: 'https://actionseaze.com/wp-content/uploads/2020/02/sunset.jpg'
                }} />
            </SharedElement>
            <View style={{ flex: 1 }}>
                <Text> Screen 2 </Text>
            </View>
        </View>
    )
}