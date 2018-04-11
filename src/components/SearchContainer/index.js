import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import TimerMixin from 'react-timer-mixin';

import api from '../../services/api';
import ArtistList from './ArtistList';

import styles from './styles';

class SearchContainer extends Component {
    constructor(){
        super();
        this.state = {
            searchText: '',
            showSearch: false,
            search: [],
            searchLoading: true,
            clearId: '',
        }
    }

    searchArtist = async () => {
        try {
            const response = await api.get(`/search?q=${this.state.searchText}&type=artist&market=br&limit=50`);
            const search = response.data.artists;
            await this.setState({ search });
            this.setState({ searchLoading: false });
        } catch (err) {
            this.props.signIn();
        }
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

    toggleSearch = () => {
        this.setState({ showSearch: !this.state.showSearch });
        this.setState({ searchText: '' });
    }

    render(){
        return (
            <View>
                { this.state.showSearch && 
                    (
                        <View style={styles.searchContainer}>
                            <ArtistList
                                artists={this.state.search}
                                loading={this.state.searchLoading}
                                setArtist={this.props.setArtist}
                                toggleSearch={this.toggleSearch}
                            />
                        </View>
                    )
                }

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
        )
    }
}
export default SearchContainer;