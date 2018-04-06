import React, { Component } from 'react';

import { ScrollView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import ArtistItem from './components/ArtistItem';

import styles from './styles';

export class ArtistList extends Component {

  renderFlatList = () => (
    <FlatList
      data={this.props.artists.items}
      renderItem={this.renderArtist}
      keyExtractor={item => item.id}
    />
  );

  renderArtist = ({ item, index }) => (
    <ArtistItem
      style={[
        styles.listItem,
        (Number.parseInt(index, 10) === 0) ? styles['listItem-first'] : {},
        (Number.parseInt(index, 10) === (this.props.artists.items.length)) ? styles['listItem-last'] : {},
      ]}
      artist={item}
      setArtist={this.props.setArtist}
    />
  );

  renderEmpty = () => (
    <Text style={styles.emptyList}>Nenhum artista encontrado</Text>
  );

  renderContent = () => (
    this.props.artists.items.length === 0
      ? this.renderEmpty()
      : this.renderFlatList()
  );

  render() {
    return (
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.artistListTitleContainer}>
            <Text style={styles.artistListTitle}>Artistas</Text>
        </View>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent() 
        }
      </ScrollView>
    );
  }
}

export default ArtistList;
