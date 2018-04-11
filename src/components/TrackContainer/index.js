import React, { Component } from 'react';

import { View } from 'react-native';

import api from '../../services/api';
import TrackList from './TrackList';
import Loading from '../Loading';

import styles from './styles';

class TrackContainer extends Component {

  constructor(){
    super();
    this.state = {
      loading: true,
      loadingText: '',
      tryAgain: false,
      tracks: [],
      artistID: ''
    }
  }

  async componentDidMount() {
    this.setLoading(true, "Buscando Músicas...", false);
    await this.getMostPlayed(this.props.artistID);
    this.setLoading(false, "", false);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.artistID !== this.props.artistID) {
        this.setLoading(true, "Buscando Músicas...", false);
        await this.getMostPlayed(this.props.artistID);
        this.setLoading(false, "", false);
    }
  }

  getMostPlayed = async (artistID) => {
    try {
      const response = await api.get(`/artists/${artistID}/top-tracks?country=br`);
      const { tracks } = response.data;
      await this.setState({ tracks });
    } catch (err) {
      this.props.signIn();
    }
  };

  setLoading = (loading, loadingText, tryAgain) =>
  {
      this.setState({ loading });
      this.setState({ loadingText });
      this.setState({ tryAgain });
  }

  render(){
    const { loading, loadingText, tryAgain } = this.state;

    return (
      <View style={styles.container}>
        { loading 
          ? (
              <Loading 
                  loadingText={loadingText}
                  tryAgain={tryAgain}
                  signIn={this.props.signIn}                
              />
            )
          : ( 
              <TrackList 
                style={styles.trackList}
                tracks={this.state.tracks}
              />
            )
        }
      </View>
    )
  }
}

export default TrackContainer;
