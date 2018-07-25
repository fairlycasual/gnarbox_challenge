import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  WebView,
  Button,
  Alert
} from 'react-native';

class MultipleVideos extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0
    }

    this.incrementVideo = this.incrementVideo.bind(this);
    this.decrementVideo = this.decrementVideo.bind(this);
  }

    incrementVideo = () => {
      let prev = this.state.currentIndex;
      let curr = prev + 1;

      this.setState({ currentIndex: curr});
    }

    decrementVideo = () => {
      let prev = this.state.currentIndex;
      let curr = prev - 1;

      this.setState({ currentIndex: curr});
    }

    videoQueue = ['https://www.youtube.com/embed/3NhHqPA8nIs?rel=0&autoplay=0&showinfo=0&controls=0', 'https://www.youtube.com/embed/OA8Pou_DMNo?rel=0&amp;controls=0', 'https://www.youtube.com/embed/XYUQ63CmzF0?rel=0&amp;controls=0'];
  

    render() {
      const videoWidth = Dimensions.get('window').width;
      const videoHeight = videoWidth * (9 / 16);
  
      const styles = StyleSheet.create({
        videoContainer: {
          width: videoWidth,
          height: videoHeight,
          backgroundColor: 'rgb(255,255,255)',
          paddingTop: 0
        },
        button: {
          backgroundColor: 'white',
        },
        buttonContainer: {
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      })
  
      return (
        <View>
          <WebView
            source={{ uri: this.videoQueue[this.state.currentIndex] }}
            style={styles.videoContainer}
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button}
            title="Previous Video"
            onPress={this.decrementVideo}/>
            <Button style={styles.button}
            title="Next Video"
            onPress={this.incrementVideo} />
          </View>
        </View>
      )
    }

  }



export default class VideoPlayer extends Component {

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
      <View>
        <MultipleVideos />
      </View>
    )
  }

}
