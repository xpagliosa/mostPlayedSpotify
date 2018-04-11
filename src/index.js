import React, { Component } from 'react';

import { AsyncStorage, StatusBar, View } from 'react-native';

import login from './services/login';
import ArtistContainer from './components/ArtistContainer';
import TrackContainer from './components/TrackContainer';
import SearchContainer from './components/SearchContainer';
import Loading from './components/Loading';

import { styles } from './styles';

export default class App extends Component {

  state = {
    loading: true,
    loadingText: '',
    tryAgain: false,
    artistID: "6jesZl7rJFJZ8d5i9pX5q8",
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    if (token)
    {
      this.setState({ artistId: this.state.artistId });
      this.setLoading(false, "", false);
    }
    else
    {
      await this.tryAgain();
      this.setLoading(false, "", false);      
    }
  }

  tryAgain = async () => {
    await this.signIn();
    this.setState({ artistId: this.state.artistId });
    this.setLoading(false, "", false);    
  }

  signIn = async () => {
    try {
      this.setLoading(true, "Conectando Spotify...", false);
      const response = await login.post('/token');
      const { access_token } = response.data;
      await AsyncStorage.setItem('@CodeApi:token', access_token);
    } catch (err) {
      this.setLoading(true, err.data.error, true);
    }
  };

  setLoading = (loading, loadingText, tryAgain) =>
  {
    this.setState({ loading });
    this.setState({ loadingText });
    this.setState({ tryAgain });
  }

  setArtist = async (artistID) =>
  {
    await this.setState({ artistID });
  }

  render() {
    const { loading, loadingText, tryAgain, artistID } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header} />

        { loading 
          ? (
              <View style={styles.container}>
                <Loading 
                  loadingText={loadingText}
                  tryAgain={tryAgain}
                  signIn={this.tryAgain}
                />
              </View>
            )
          : ( 
              <View style={styles.container}>
                <ArtistContainer
                  style={styles.artistContainer}
                  artistID={artistID}
                  signIn={this.tryAgain}
                />
                <TrackContainer
                  style={styles.trackContainer}
                  artistID={artistID}
                  signIn={this.tryAgain}
                />
                <SearchContainer
                  style={styles.searchContainer}
                  signIn={this.tryAgain}
                  setArtist={artist => this.setArtist(artist)}                
                />
              </View>
            )
        }
      </View>
    );
  }
}