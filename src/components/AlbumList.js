import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        console.log('componentWillMount in AlbumList')
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(responseData => this.setState({ albums: responseData }))
        .catch(error => console.log(error))
    }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>)
    }

    render () {
        console.log
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList
