import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log('componentWillMount in AlbumList')
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response.json()))
        .catch(error => console.log(error))
    }

    render () {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList
