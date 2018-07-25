import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  WebView
} from 'react-native';

class VideoPlayer extends Component {
  state = {
    paused: true
  };

  render() {
    const videoWidth = Dimensions.get('window').width;
    const videoHeight = videoWidth * (9 / 16);

    const styles = StyleSheet.create({
      videoContainer: {
        width: videoWidth,
        height: videoHeight,
        backgroundColor: 'rgb(255,255,255)',
        paddingTop: 0
      }
    })

    return (
      <WebView
        source={{ uri: 'https://www.youtube.com/embed/3NhHqPA8nIs?rel=0&autoplay=0&showinfo=0&controls=0' }}
        style={styles.videoContainer}
      />
    )
  }

}

export default VideoPlayer;