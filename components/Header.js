import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const winWidth = Dimensions.get('window').width
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image 
      style={{flex:1, height: 50, width: 100,resizeMode: 'contain'}}
      source={require('../img/gnarboxLogo.png')}
       />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    alignSelf: 'stretch',
    top: 0,
    height: 75,
    width: winWidth,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    backgroundColor: 'white'
  }

})