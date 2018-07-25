import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './components/Header';
import VideoPlayer from './components/Video';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.videoContainer}>
              <VideoPlayer />
          </View>
            <Text style={{color: 'white'}}>Hello Wilbur!</Text>
            <Text style={{color: 'white'}}>Hello Frank!</Text>
            <Text style={{color: 'white'}}>Hello Jobs?</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    top: 70,
    paddingTop: 5,
  },
  headerContainer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    height: 72,
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  videoContainer: {
    flex: 0,
    backgroundColor: 'rgb(4,4,4)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  }
});