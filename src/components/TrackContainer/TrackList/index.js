import React, { Component } from 'react';

import { ScrollView, Text, View } from 'react-native';

import TrackItem from './TrackItem';

import styles from './styles';

class TrackList extends Component {
    render(){
        return(
            <ScrollView contentContainerStyle={styles.trackList}>
                <View style={styles.trackListTitleContainer}>
                    <Text style={styles.trackListTitle}>Mais Tocadas</Text>
                </View>
                { this.props.tracks == undefined || this.props.tracks.length == 0 
                ? <Text style={styles.emptyList}>Nenhuma música encontrada</Text> 
                :  this.props.tracks.map(
                    track => (
                        <TrackItem key={track.id} data={track} />
                    ))
                }
            </ScrollView>
        )
    }
}

export default TrackList;