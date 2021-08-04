import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Loading from './LoadingScreen';
import axios from 'axios';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';

export default class MoonMap extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      responses: [],
      allScrollersX: [],
      scrollVal: 50,
    };
  }
  componentDidMount() {
    this.getMoonTiles();
    /*setInterval(() => {
      for (var i in this.state.allScrollersX) {
        this.state.allScrollersX[i].scrollTo({
          x: this.state.scrollVal,
        });
      }
    }, 5);*/
  }
  getMoonTiles = () => {
    var responses = [];
    for (var i = 0; i < 16; i++) {
      responses[i] = [];
      for (var j = 0; j < 33; j++) {
        responses[i].push(
          'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/4/' +
            i +
            '/' +
            j +
            '.jpg'
        );
      }
    }
    //console.log(responses)
    this.setState({ loading: false, responses: responses });
  };
  renderItem = ({ item }) => {
    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          ref={(ref) => {
            this.state.allScrollersX.push(ref);
          }}
          style={{ flexDirection: 'row' }}
          onScroll={(event) => {
            this.setState({
              scrollVal: event.nativeEvent.contentOffset.x,
            });
            for (var i in this.state.allScrollersX) {
              this.state.allScrollersX[i].scrollTo({
                x: event.nativeEvent.contentOffset.x,
              });
            }
          }}>
          {item.map((data, index) => {
            {
              return <Image source={{ uri: data }} style={styles.image} />;
            }
          })}
        </ScrollView>
      </View>
    );
  };
  keyExtractor = (item, index) => {
    return index.toString();
  };
  doTiles() {
    return (
      <FlatList
        data={this.state.responses}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      );
    } else {
      return (
        <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={256}
                       imageHeight={256}>
          <Image source={'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/4/3/4.jpg'} style={{width:256,height}}/>
        </ImageZoom>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: 256,
    height: 256,
    resizeMode: 'contain',
  },
});
