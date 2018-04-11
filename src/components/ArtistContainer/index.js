import React, { Component } from 'react';

import { View } from 'react-native';

import api from '../../services/api';
import Artist from './Artist';
import Loading from '../Loading';

import styles from './styles';

class ArtistContainer extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            loadingText: '',
            tryAgain: false,
            artist: [],
            artistID: '',
        }
    }

    async componentDidMount() {
        this.setLoading(true, "Buscando Artista...", false);
        await this.getArtist(this.props.artistID);
        this.setLoading(false, "", false);
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.artistID !== this.props.artistID) {
            this.setLoading(true, "Buscando Artista...", false);
            await this.getArtist(this.props.artistID);
            this.setLoading(false, "", false);
        }
    }

    getArtist = async (artistID) => {
        try {
            const response = await api.get(`/artists/${artistID}`);
            // const axiosInstance = api.axiosInstance;
            const artist = response.data;
            await this.setState({ artist })
            this.setState({ artistID });
        } catch (err) {
            this.props.signIn();
        }
    }

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
                    ?   (
                            <Loading 
                                loadingText={loadingText}
                                tryAgain={tryAgain}
                                signIn={this.props.signIn}
                            />
                        )
                    :   ( 
                            <Artist 
                                {...this.state.artist}
                            />
                        )
                }
            </View>
        )
    }
}

export default ArtistContainer;