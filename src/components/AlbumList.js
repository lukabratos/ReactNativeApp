import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail'

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
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        )
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
