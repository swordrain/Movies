import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableOpacity,
  ActivityIndicatorIOS,
  ScrollView,
  StyleSheet,RefreshControl,
  Image
} from 'react-native';
import {styles} from './DetailStyles';

import NavigationBar from 'react-native-navbar';
import {statusBarConfig, titleConfig, backConfig, rightConfig} from './NavBarConfig';
import Modal from 'react-native-modalbox';
import MovieDetailAka from './MovieDetailAka';
import MovieDetailOriginalTitle from './MovieDetailOriginalTitle';
import MovieDetailDirector from './MovieDetailDirector';
import MovieDetailCasts from './MovieDetailCasts';
import MovieDetailSummary from './MovieDetailSummary';
import MovieDetailCountries from './MovieDetailCountries';
import MovieDetailRating from './MovieDetailRating';
import MovieDetailGenres from './MovieDetailGenres';

export default class MovieDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie: null,
      modalImageUri: ''
    }
  }
  _fetchData(){
    StatusBar.setNetworkActivityIndicatorVisible(true);
    this.setState({
      isRefreshing: true
    });
    fetch("http://api.douban.com/v2/movie/subject/" + this.props.movieId)
    .then((response)=>response.json())
    .then((data)=>{
      this.setState({
        movie: data,
      });
      console.log(data);
      StatusBar.setNetworkActivityIndicatorVisible(false);
     
    }).catch((error) => {
        alert(error);
        StatusBar.setNetworkActivityIndicatorVisible(false);
        
      });
  }
	componentDidMount() {
    this._fetchData();
  }
  _showWebDetail(){
    if(this.state.movie && this.state.movie.mobile_url){
      const { navigator } = this.props;
      if(navigator) {
          navigator.push({
              id: 'DetailWeb',
              url: this.state.movie.mobile_url
          });
      }
    }
  }

  _showModal(url){
    console.log(url);
    this.setState({
      modalImageUri: url
    });
    this.refs.modal.open();

  }

	render() {
    var content;
    var title;
    var self = this;
    if(!this.state.movie){
      title='Loading...';
      content = <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}><ActivityIndicatorIOS size='large'/></View>;
    }else{
      let movie = this.state.movie;
      title = movie.title;
      var refreshControl = (<RefreshControl
            refreshing={false}
            onRefresh={this._fetchData.bind(this)}
            title="Loading..."
          />);

      var originalTitle = <MovieDetailOriginalTitle  original_title={movie.original_title} />;

      var aka = <MovieDetailAka aka={movie.aka} />
      var director = <MovieDetailDirector directors={movie.directors} showModal={this._showModal.bind(this)}/>;

      var casts = <MovieDetailCasts casts={movie.casts} showModal={this._showModal.bind(this)}/>;
      var summary = <MovieDetailSummary summary={movie.summary} />;

      var countries = <MovieDetailCountries countries={movie.countries} />;

      var rating = <MovieDetailRating rating={movie.rating} />;
      var genres = <MovieDetailGenres genres={movie.genres} />;
      

      content = (<ScrollView refreshControl={refreshControl} style={styles.scrollView}>
        {originalTitle}
        {aka}
        {countries}
        {rating}
        {director}
        {casts}
        {summary}

        </ScrollView>);
    }
    /* Modal必须放在内容后面， 否则造成穿透 */
		return (
      
			<View style={{flex: 1, marginBottom: 50,}}>
        
        <NavigationBar leftButton={backConfig(this.props.navigator)} rightButton={rightConfig('Detail', this._showWebDetail.bind(this))} title={titleConfig(title)} statusBar={statusBarConfig} tintColor='midnightblue'/>
        
        {content}

        <Modal style={styles.modal} backdrop={true} backdropColor="midnightblue"  position={"center"} ref={"modal"}>
          <Image  style={styles.modalImage} source={{uri: this.state.modalImageUri}} />
        </Modal>
      </View>

			)
	}

}

