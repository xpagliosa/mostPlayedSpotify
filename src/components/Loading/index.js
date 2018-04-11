import React, { Component } from 'react';

import { ActivityIndicator, Text, TouchableOpacity, View  } from 'react-native';

import styles from './styles';

export default class Loading extends Component {

  render(){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFF" />
        <Text style={styles.loading}> {this.props.loadingText} </Text>
        { this.props.tryAgain && 
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.signIn}
          >
            <Text style={styles.buttonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}
