import React, { Component } from 'react';

import { Image, Text, View } from 'react-native';

import styles from './styles';

class Artist extends Component {

  render(){
    const { name, followers, images } = this.props;

    let foto = 'https://developer.spotify.com/wp-content/uploads/2016/07/icon3@2x.png';
    if (images.length > 0)
      foto = images[1].url

    return (
      <View style={styles.artist}>
        <Image
          style={styles.artistImage}
          source={{ uri: foto }}
        />
        <Text style={styles.artistName}>{name}</Text>
        <Text style={styles.artistFollow}>{followers.total} SEGUIDORES</Text>
      </View>
    )
  }
}

export default Artist;
