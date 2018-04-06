import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class SongItem extends Component {

  _setArtist = () => {
    this.props.setArtist(this.props.artist);
  };

  render() {
    const { images } = this.props.artist;
    let foto = 'https://developer.spotify.com/wp-content/uploads/2016/07/icon3@2x.png';
    if (images.length > 0)
        foto = images[2].url

    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={[styles.container, this.props.style]}
        onPress={this._setArtist}
      >
        <View style={styles.artistInfo}>
          <Image
              style={styles.artistImage}
              source={{ uri: foto }}
          />
          <Text style={styles.name} >
            {this.props.artist.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
