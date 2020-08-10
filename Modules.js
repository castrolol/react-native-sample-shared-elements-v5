import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Screen1 from './Screen1';
import Screen2 from './Screen2';


const Stack = createSharedElementStackNavigator();


export default function Modules() {
    return (
        <Stack.Navigator>

            <Stack.Screen component={Screen1} name="Screen1" />
            <Stack.Screen component={Screen2} 
             sharedElementsConfig={(route, otherRoute, showing) => {
                return [`image`];
              }}
            name="Screen2" />
        </Stack.Navigator>
    )
}