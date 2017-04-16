// Import a library to help create a component
import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import AlbumList from './components/AlbumList'

class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        )
    }
}

export default App