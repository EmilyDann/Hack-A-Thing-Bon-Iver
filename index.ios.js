//tutorial and code based on https://playcode.org/navigation-in-react-native/
//tutorail and code based on https://facebook.github.io/react-native/docs/tutorial.html

import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, Navigator, TouchableOpacity} from 'react-native';


AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);

var PageOne = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2,});
  },

   render() {
    let pic = {
      uri: 'https://i.ytimg.com/vi/qt2VJUgZR3I/0.jpg'
    };
    return (

      <View style={[styles.container, {backgroundColor: 'green', paddingVertical: 40}]}>
        <HighlightedTrackName trackName='Over soon'/>
          <NonHighlightedTrackName trackName='22' />
          <NonHighlightedTrackName trackName='10deathbreast' />
          <HighlightedTrackName trackName="Creeks" />
          <NonHighlightedTrackName trackName="God" />
          <NonHighlightedTrackName trackName="Strafford APTS" />
          <NonHighlightedTrackName trackName="666"/>
          <HighlightedTrackName trackName="21 Moon Water" />
          <NonHighlightedTrackName trackName="8 (circle)" />
          <View style={{alignItems: 'center', flex:2, backgroundColor: 'green', justifyContent: 'flex-start'}}>
            <Image source={pic} style={{width: 193, height: 110}}/>  
          </View>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Go to page two</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});

var PageTwo = React.createClass({
  _handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
        <Text style={styles.welcome}>This is page two!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Go back</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});

class HelloWorldApp extends Component {
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  }



  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  }
});

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);


class HighlightedTrackName extends Component{
  render(){
    return(
      <Text style={styles.highlightedTrack}>Track: {this.props.trackName}</Text>
    );
  }
}

class NonHighlightedTrackName extends Component{
  render(){
    return(
      <Text style={styles.nonHighlightedTrack}> Track: {this.props.trackName}</Text>
      );
  }
}






// AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);