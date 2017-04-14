// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Hello World</Text>
);

// Render it to device
AppRegistry.registerComponent('AwesomeProject', () => App);