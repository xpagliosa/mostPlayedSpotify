import React, { Component } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';

import { web } from 'react-native-communications';

import styles from './styles';

const TrackItem = ({ data }) => (
  <View style={styles.trackList}>
    <Image
      style={styles.trackImage}
      source={{ uri: data.album.images[1].url }}
    />
    <View style={styles.trackInfo}>
      <Text style={styles.trackTitle}>{data.name}</Text>
      <Text style={styles.trackAlbum}>{data.album.name}</Text>
    </View>
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.play}
      onPress={() => web(`https://open.spotify.com/embed?uri=spotify:track:${data.id}`)}
    >
      <Image
        style={styles.playButton}
        source={require('./assets/play.png')}
      />
    </TouchableOpacity>
  </View>
);

export default TrackItem;
