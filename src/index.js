import React, { Component } from 'react';

import {
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import TimerMixin from 'react-timer-mixin';

import api from './services/api';
import login from './services/login';
import ArtistList from './components/ArtistList';
import TrackList from './components/TrackList';
import Artist from './components/Artist';

import { styles } from './styles';

import tagore from './artist.json';

export default class App extends Component {

  state = {
    loading: true,
    loadingText: '',
    tryAgain: false,
    showArtist: false,
    artist: [],
    tracks: [],
    searchText: '',
    showSearch: false,
    search: [],
    searchLoading: true,
    clearId: '',
  };

  async componentDidMount() {
    console.log('inicio');
    const token = await AsyncStorage.getItem('@CodeApi:token');
    console.log('token');
    if (token)
    {
      console.log('tem token');
      await this.setTagore();
    }
    else
    {
      await this.signIn();
      this.setTagore();
    }
  }

  tryAgain = () => {
    console.log('tryAgain');
    await this.signIn();
      this.state.artist.length == 0
      ? this.setTagore()
      : this.getMostPlayed();
  }

  signIn = async () => {
    console.log('signIn');
    try {
      this.setState({ loadingText: "Conectando Spotify..." });
      this.setState({ loading: true });
      this.setState({ tryAgain: false });
      const response = await login.post('/token');
      const { access_token } = response.data;
      await AsyncStorage.setItem('@CodeApi:token', access_token);
    } catch (err) {
      this.setState({ loadingText: err.data.error });
      this.setState({ loading: true });
      this.setState({ tryAgain: true });
    }
  };

  getMostPlayed = async () => {
    console.log('MostPlayed');
    try {
      this.setState({ loadingText: "Carregando Músicas..." });
      this.setState({ loading: true });
      const response = await api.get(`/artists/${this.state.artist.id}/top-tracks?country=br`);
      const { tracks } = response.data;
      console.log(response.data);
      this.setState({ tracks });
      this.setState({ loading: false });
      this.setState({ showArtist: true });
    } catch (err) {
      if(err.data.error.status == 401)
      {
        this.setState({ loadingText: "Sessão Expirada..." });
        this.setState({ loading: true });
        this.signIn();
      }
      else
      {
        this.setState({ loadingText: err.data.error });
        this.setState({ loading: true });
        this.setState({ tryAgain: true });
      }
    }
  };

  searchArtist = async () => {
    console.log('SearchArtistl');
    try {
      const response = await api.get(`/search?q=${this.state.searchText}&type=artist&market=br&limit=50`);
      const search = response.data.artists;
      await this.setState({ search });
      this.setState({ searchLoading: false });
    } catch (err) {
      if(err.data.error.status == 401)
      {
        this.setState({ loadingText: "Sessão Expirada..." });
        this.setState({ loading: true });
        this.signIn();
      }
      else
      {
        this.setState({ loadingText: err.data.error });
        this.setState({ loading: true });
        this.setState({ tryAgain: true });
      }
    }
  }

  setArtist = async (artist) => {
    console.log('SetArtist');
    this.setState({ loadingText: "Carregando Artista..." });
    this.setState({ loading: true });
    await this.setState({ artist });
    this.setState({ search: {}, searchText: '', showSearch: false,searchLoading: true, showArtist: false, loading: true});
    this.getMostPlayed();
  }

  setTagore = async () => {
    console.log('SetTagore');
    this.setState({ loadingText: "Carregando Artista..." });
    this.setState({ loading: true });
    await this.setState({ artist: tagore });
    this.setState({ loading: false });
    this.setState({ showArtist: true });
    this.getMostPlayed();
  }

  inputChangedText = (searchText) => {
    this.setState({ searchText });
    if(this.state.clearId != '')
    {
      TimerMixin.clearTimeout(this.state.clearId)
    }
    if(searchText.length > 0)
    {
      this.setState({ showSearch: true });
      var clearId = TimerMixin.setTimeout(() => {
        this.searchArtist();
      }, 1000);
      this.setState({ clearId });
    }
    else
    {
      this.setState({ showSearch: false });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />

        { this.state.loading 
        ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#FFF" />
              <Text style={styles.loading}> {this.state.loadingText} </Text>
              { this.state.tryAgain && 
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.signIn}
                >
                  <Text style={styles.buttonText}>Tentar Novamente</Text>
                </TouchableOpacity>
              }
            </View>
          )
        : (
            <View style={styles.container}>
              <Artist {...this.state.artist} />
                
              <ScrollView contentContainerStyle={styles.trackList}>
                 <View style={styles.trackListTitleContainer}>
                   <Text style={styles.trackListTitle}>Mais Tocadas</Text>
                 </View>
                 { this.state.tracks == undefined || this.state.tracks.length == 0 
                   ? <Text style={styles.emptyList}>Nenhuma música encontrada</Text> 
                  :  this.state.tracks.map(
                      track => (
                        <TrackList key={track.id} data={track} />
                      ))
                }
              </ScrollView>

              { this.state.showSearch && (
                <View style={styles.searchContainer}>
                    <ArtistList
                      artists={this.state.search}
                      loading={this.state.searchLoading}
                      setArtist={artist => this.setArtist(artist)}
                    />
                </View>
              )}

              <View style={styles.footer}>
                <TextInput
                  autoCapitalize="none"
                  style={styles.searchInput}
                  placeholder="Buscar Artista"
                  placeholderTextColor="#999"
                  onChangeText={searchText => this.inputChangedText(searchText)}
                  underlineColorAndroid="transparent"
                  value={this.state.searchText}
                  returnKeyType="search"
                  clearButtonMode='while-editing'
                />
              </View>
            </View>
          )}
      </View>
    );
  }
}