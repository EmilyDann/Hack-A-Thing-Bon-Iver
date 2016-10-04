//tutorial and code based on https://playcode.org/navigation-in-react-native/
//tutorail and code based on https://facebook.github.io/react-native/docs/tutorial.html

import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, ScrollView, StyleSheet, Navigator, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

// import LyricsPage from './LyricsPage';

const lyrics = {
  'Over soon': 'It might be over soon, soon, soon\nWhere you gonna look for confirmation?\nAnd if it\'s ever gonna happen...\n',       
  '10deathBreast': 'Fe, fever rest\nFever rest\n(Wild heart, wild heart)\nI cut you in\nDeafening\nFever rest',
  'Creeks': 'Down along the creek\nI remember something\nHer, the heron hurried away\nWhen first I breeched that last Sunday',
  'God': '(When we leave this room it\'s gone)\nIs the company stalling?\nWe had what we wanted: your eyes\n(When we leave this room it\'s gone)',
  'Strafford APTS': 'Sharing smoke\nIn the stair up off the hot car lot\nSun shine hard on the video spot\nHm, mm, mm, mm',
  '666': 'Sixes hang in the door\nWhat kind of shit to ignore\nI\'ve cut the cloth\n(Ooo, hard line circle)',
  '21 Moon Water': 'The math ahead\nThe math behind it\nIt\'s moon water',
  '8 (circle)': 'Philosophize your figure\nWhat I have and haven\'t held\nYou called and I came, stayed tall through it all\nFall and fixture just the same thing',
}
  
var PageOne = React.createClass({

  _handlePress(pageId, trackTitle) {
    this.props.navigator.push({id: pageId, title: trackTitle});
  },

   render() {
    let pic = {
      uri: 'https://i.ytimg.com/vi/qt2VJUgZR3I/0.jpg'
    };
    return (

      <View style={[styles.container, {backgroundColor: 'green', paddingVertical: 40}]}>
        <TouchableHighlight onPress={() => this._handlePress(3, 'Over soon')} underlayColor='white'>
          <HighlightedTrackName trackName='Over soon'/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, '10deathBreast')} underlayColor='white'>
          <NonHighlightedTrackName trackName='10deathBreast' />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, 'Creek')} underlayColor='white'>
          <NonHighlightedTrackName trackName='Creeks' />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, 'God')} underlayColor='white'>
          <NonHighlightedTrackName trackName='God' />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, 'Strafford APTS')} underlayColor='white'>
          <NonHighlightedTrackName trackName='Strafford APTS' />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, '666')} underlayColor='white'>
          <NonHighlightedTrackName trackName='666' />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, '21 Moon Water')} underlayColor='white'>
          <NonHighlightedTrackName trackName='21 Moon Water' />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handlePress(3, '8 (circle)')} underlayColor='white'>
          <NonHighlightedTrackName trackName='8 (circle)' />
        </TouchableHighlight>
        <View style={{alignItems: 'center', flex:2, backgroundColor: 'green', justifyContent: 'flex-start'}}>
          <Image source={pic} style={{width: 193, height: 110}}/>  
        </View>
        <TouchableOpacity onPress={() => this._handlePress(2, '')}>
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
            <Text style={styles.welcome}>Go Back</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});

// failed attempt at api call...
// var LyricsPage = React.createClass({
//   getSongInfoFromLastFM(trackName) {
//     return fetch('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=2681b82da8dc4ef8445f37f98894f650&artist=Bon%20Iver&track=00000%20Million&format=json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log(responseJson.track.duration);
//         return responseJson.track.duration;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   },

//   render() {
//     return(
//       <View style={styles.container}>
//         <Text>Duration of {this.props.title}</Text>
//         <Text>{this.getSongInfoFromLastFM(this.props.title.replace(' ', '%20'))}</Text>
//       </View>
//     )
//   }
// })

var LyricsPage = React.createClass({
  _handleBackPress() {
    this.props.navigator.pop();
  },

  render() {
    return(
      <View style={styles.container}>
        <View style={{margin: 10}}>
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20}}>First lyrics of {this.props.title}</Text>
        </View>
        <Lyrics trackName={this.props.title}></Lyrics>
        <TouchableOpacity onPress={this._handleBackPress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
})



class HelloWorldApp extends Component {
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    } else if (route.id === 3) {
      return <LyricsPage title={route.title} navigator={navigator} />
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
  },
  lyricsContainer: {
    paddingBottom: 10,
  }
});


class HighlightedTrackName extends Component{
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  };

  render(){
    return(
      <View ref={component => this._root = component} {...this.props}>
        <Text style={styles.highlightedTrack}>Track: {this.props.trackName}</Text>
      </View>
    );
  }
}

class NonHighlightedTrackName extends Component{
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  };

  render(){
    return(
      <View ref={component => this._root = component} {...this.props}>
        <Text style={styles.nonHighlightedTrack}> Track: {this.props.trackName}</Text>
      </View>
    );
  }
}

class Lyrics extends Component{
  render(){
    return(
      <View style={styles.lyricsContainer}>
        <Text>{lyrics[this.props.trackName]}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);

