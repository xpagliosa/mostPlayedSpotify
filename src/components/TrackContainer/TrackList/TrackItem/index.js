import React, { Component } from 'react';

import { Image, Text, View } from 'react-native';

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
  </View>
);

export default TrackItem;
