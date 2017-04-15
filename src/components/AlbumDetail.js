import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image } = album

    return (
        <Card>
            <CardSection>
                <View>
                    <Image source={{ uri: thumbnail_image }} />
                </View>
                <View style={ styles.headerContentStyle }>
                    <Text>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetail;