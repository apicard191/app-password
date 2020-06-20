import React from 'react'
import { FlatList, StyleSheet, View, Button, TextInput, Text, ActivityIndicator} from 'react-native'
import FilmItem from './FilmItem'
import {TMDBApi} from '../API/TMDBApi';

const client = new TMDBApi();

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0;
    this.totalPages = 0;
    this.term = '';
    this.state = {
      films: [],
      isLoading: false
    };
  }
  _loadFilms(){
    if(this.term.length > 0){
      this.setState({isLoading: true});
      client.search(this.term, this.page + 1).then(data => {
        this.page = data.page;
        this.totalPages = data.total_pages;
        this.setState({films: [ ...this.state.films, ...data.results], isLoading: false});
      });
    }
  }
  _search(text){
    this.term = text;
  }
  _refreshSearch(){
    this.page = 0;
    this.totalPages = 0;
    this.setState({films: []}, () => this._loadFilms());
  }

  _displayLoading() {
    if(this.state.isLoading){
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput onChangeText={(text) => this._search(text)} style={styles.textinput} placeholder="Titre du film" onSubmitEditing={()=>this._refreshSearch()}/>
        <Button style={{height: 50}} title="Recherche" onPress={() => this._refreshSearch()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          onEndReachThreashold={0.5}
          onEndReached={() => {
            if(this.page < this.totalPages){
              this._loadFilms();
            }
          }}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
