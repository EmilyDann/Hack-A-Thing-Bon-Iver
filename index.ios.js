import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet} from 'react-native';


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



class HelloWorldApp extends Component {

  render() {
    let pic = {
      uri: 'https://i.ytimg.com/vi/qt2VJUgZR3I/0.jpg'
    };
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'skyblue', justifyContent: 'center'}}>
        <View style={{alignItems: 'center', flex:1, backgroundColor: 'orange', justifyContent: 'center'}}>
          <Text>{"\n"}</Text>
          <HighlightedTrackName trackName='Over soon'/>
          <NonHighlightedTrackName trackName='22' />
          <NonHighlightedTrackName trackName='10deathbreast' />
          <HighlightedTrackName trackName="Creeks" />
          <NonHighlightedTrackName trackName="God" />
          <NonHighlightedTrackName trackName="Strafford APTS" />
          <NonHighlightedTrackName trackName="666"/>
          <HighlightedTrackName trackName="21 Moon Water" />
          <NonHighlightedTrackName trackName="8 (circle)" />
        </View>
        <View style={{alignItems: 'center', flex:2, backgroundColor: 'green', justifyContent: 'flex-start'}}>
          <Image source={pic} style={{width: 193, height: 110}}/>  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  highlightedTrack: {
    color: 'red' ,
    fontWeight: 'bold'
  },
  nonHighlightedTrack: {
    color: 'gray',
  },
});

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
